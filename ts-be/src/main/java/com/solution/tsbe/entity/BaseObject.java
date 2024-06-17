package com.solution.tsbe.entity;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Where;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Getter
@Setter
@EntityListeners({AuditingEntityListener.class})
@MappedSuperclass
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Where(clause = "sys_Deleted = false")
public class BaseObject implements Serializable {


    @Transient
    volatile static protected long UniqueBaseObjectID = -1L;

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
    @SequenceGenerator(name = "seq", sequenceName = "ALL_OBJ_SEQ", allocationSize = 1)
    @Column(updatable = false, nullable = false)
    protected Long id;

    @Column(name = "CREATOR")
    @CreatedBy
    protected String creator = null;

    @Column(name = "CREATED_AT")
    @CreatedDate
    protected Timestamp createdAt = new Timestamp(System.currentTimeMillis());

    @Column(name = "MODIFIED_AT")
    // @Version
    @LastModifiedDate
    protected Timestamp modifiedAt = new Timestamp(System.currentTimeMillis());


    @Column(name = "SYS_DELETED")
    @org.hibernate.annotations.ColumnDefault("false")
    protected Boolean sysDeleted = false;

    @Transient
    protected boolean modified = false;

    public BaseObject() {
        super();
        this.id = UniqueBaseObjectID--;
    }


    /*
     * (non-Javadoc)
     *
     * @see java.lang.Object#hashCode()
     */
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

    /*
     * (non-Javadoc)
     *
     * @see java.lang.Object#equals(java.lang.Object)
     */
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        BaseObject other = (BaseObject) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }


    public void setModifierAndDate() {
        modifiedAt = new Timestamp(System.currentTimeMillis());
        // modifier = ???
    }

    @PreUpdate
    public void preUpdate() {
        setModifierAndDate();
    }

    @PrePersist
    public void prePersist() {
        createdAt = new Timestamp(System.currentTimeMillis());
        // creator = ???
        setModifierAndDate();
    }

    @PreRemove
    public void preRemove() {
        this.sysDeleted = true;
        setModifierAndDate();
    }


}
