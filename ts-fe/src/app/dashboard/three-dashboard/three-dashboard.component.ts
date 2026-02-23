import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import * as THREE from 'three';
import { TicketStats } from '../../shared/services/ticket-data.service';
import { ThemeService } from '../../shared/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-three-dashboard',
    templateUrl: './three-dashboard.component.html',
    styleUrls: ['./three-dashboard.component.scss']
})
export class ThreeDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('container') containerRef!: ElementRef;
    @Input() stats: TicketStats | null = null;

    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private animationId!: number;
    private bars: THREE.Mesh[] = [];
    private subscription: Subscription = new Subscription();
    private isDarkMode = false;

    constructor(private themeService: ThemeService) { }

    ngOnInit(): void {
        this.subscription.add(
            this.themeService.isDarkMode$.subscribe(isDark => {
                this.isDarkMode = isDark;
                this.updateSceneColors();
            })
        );
    }

    ngAfterViewInit(): void {
        this.initThree();
        this.animate();
    }

    ngOnDestroy(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.renderer) {
            this.renderer.dispose();
            this.renderer.forceContextLoss();
        }
        this.subscription.unsubscribe();
    }

    @HostListener('window:resize')
    onWindowResize(): void {
        if (this.camera && this.renderer && this.containerRef) {
            const width = this.containerRef.nativeElement.clientWidth;
            const height = this.containerRef.nativeElement.clientHeight;
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
        }
    }

    private initThree(): void {
        const width = this.containerRef.nativeElement.clientWidth;
        const height = this.containerRef.nativeElement.clientHeight;

        this.scene = new THREE.Scene();

        // Add some fog for depth
        this.scene.fog = new THREE.Fog(0x000000, 5, 25);

        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.set(0, 5, 12);
        this.camera.lookAt(0, 2, 0);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.containerRef.nativeElement.appendChild(this.renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(5, 10, 7.5);
        this.scene.add(directionalLight);

        this.createBars();
        this.createGrid();
        this.updateSceneColors();
    }

    private updateSceneColors(): void {
        if (!this.scene) return;

        const bgColor = this.isDarkMode ? 0x121212 : 0xfafafa;
        this.scene.background = new THREE.Color(bgColor);
        if (this.scene.fog) {
            (this.scene.fog as THREE.Fog).color.setHex(bgColor);
        }
    }

    private createGrid(): void {
        const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
        this.scene.add(gridHelper);
    }

    private createBars(): void {
        const statuses: (keyof TicketStats)[] = ['open', 'inProgress', 'resolved', 'closed', 'pending'];
        const colors = [0xf44336, 0x2196f3, 0x4caf50, 0x9e9e9e, 0xff9800];

        statuses.forEach((status, index) => {
            const geometry = new THREE.BoxGeometry(1.2, 1, 1.2);
            const material = new THREE.MeshPhongMaterial({
                color: colors[index],
                transparent: true,
                opacity: 0.9,
                shininess: 100
            });
            const bar = new THREE.Mesh(geometry, material);
            bar.position.x = (index - 2) * 2.5;
            this.scene.add(bar);
            this.bars.push(bar);

            // Add actual values as labels could be complex in pure Three.js, 
            // so we use scale to represent data.
        });
    }

    private animate(): void {
        this.animationId = requestAnimationFrame(() => this.animate());

        if (this.stats) {
            const values = [
                this.stats.open,
                this.stats.inProgress,
                this.stats.resolved,
                this.stats.closed,
                this.stats.pending
            ];
            const maxVal = Math.max(...values, 10); // Minimum max for better scale

            this.bars.forEach((bar, index) => {
                const targetScale = (values[index] / maxVal) * 8 + 0.5;
                // Smooth transition
                bar.scale.y = THREE.MathUtils.lerp(bar.scale.y, targetScale, 0.05);
                bar.position.y = bar.scale.y / 2;

                // Gentle rotation
                bar.rotation.y += 0.005;
            });
        }

        this.renderer.render(this.scene, this.camera);
    }
}
