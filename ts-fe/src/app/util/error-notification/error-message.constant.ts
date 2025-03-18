export function errorMsgByErrorId(errorId: string, additionalInfo = '') {
  if (!errorId) {
    return '';
  }
  const ERROR_ID_SEPARATOR = '.';
  const [firstKey, ...remainingKeys] = errorId.split(ERROR_ID_SEPARATOR);

  const error = remainingKeys.reduce((acc, key) => acc?.[key], BACKEND_MESSAGE_CONSTANTS(additionalInfo)[firstKey]);

  return error ?? BACKEND_MESSAGE_CONSTANTS().error.unknown;
}

export const BACKEND_MESSAGE_CONSTANTS = (additionalInfo?: string) => {
  return {
    error: {
      notFound: $localize`:error message|not found: Nicht gefunden`,
      validation: $localize`:error message|validation:Felder können nicht geändert werden`,
      unknown: $localize`:error message|unknown:Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut`,
      badRequest: $localize`:error message|bad request:Schlechte Anfrage, bitte prüfen Sie die Felder`,
      unauthorized: {
        login: $localize`:error message|unauthorized: Zugriff verweigert - Unauthorisiert`,
        action: $localize`:error message|unauthorized action: Sie sind leider nicht berechtigt, diese Aktion durchzuführen`,
      },
      user: {
        notFound: $localize`:error message|user not found: Benutzer konnte nicht gefunden werden`,
      },
      location: {
        notFound: $localize`:error message|location not found: Standort konnte nicht gefunden werden`,
        duplicate: {
          name: $localize`:error message|location duplicate name: Ortsname ist bereits vorhanden`,
          alias: $localize`:error message|location duplicate alias: Der Ortsalias ist bereits vorhanden`,
        },
      },
      category: {
        autoAlias: {
          notFound: $localize`:error message|auto category not found:Aktualisierung fehlgeschlagen: Kategorie mit dem Alias "${additionalInfo}" nicht gefunden. Bitte fügen Sie die Kategorie hinzu und versuchen Sie es erneut.`,
        },
        notFound: $localize`:error message|category not found:Kategorie konnte nicht gefunden werden`,
        duplicate: {
          name: $localize`:error message|category duplicate name: Kategoriename ist bereits vorhanden`,
          alias: $localize`:error message|category duplicate alias: Kategoriealias ist bereits vorhanden`,
        },
      },
      facility: {
        notFound: $localize`:error message|facility not found:Pflanzeneinheit konnte nicht gefunden werden`,
        exists: $localize`:error message|facility exists:Werkseinheit existiert bereits`,
        time: $localize`:error message|facility time: Bei der Aktualisierung der Gesamtbetriebsstunden dieser Betriebseinheit ist ein Fehler aufgetreten`,
        state: {
          notNull: $localize`:error message|facility state not null: Der Status der Betriebseinheit kann nicht null sein`,
          changeRequired: $localize`:error message|facility state change required: Statusänderung ist für diese ausgewählte Kategorie obligatorisch`,
          notAllowed: $localize`:error message|facility state not allowed: Die Anlage befindet sich bereits in diesem Zustand`,
          noUpdate: $localize`:error message|facility state no update: Kann den Status der Werkseinheit während der Protokollaktualisierung nicht ändern`,
        },
        location: {
          notFound: $localize`:error message|facility location not found: Standort der zugehörigen Anlageneinheit konnte nicht gefunden werden`,
        },
      },
      kks: {
        notFound: $localize`:error message|kks not found:KKS konnte nicht gefunden werden`,
        duplicate: {
          title: $localize`:error message|kks title exist:KKS mit diesem Titel existiert bereits`,
          kks: $localize`:error message|kks kks exist:Doppeltes KKS nicht erlaubt`,
        },
        component: {
          notSelected: $localize`:error message|component kks not selected:Komponente KKS nicht ist für die angegebene Kategorie ausgewählt`,
          notFound: $localize`:error message|component kks not found:Kein KKS der Komponente für die gewählte Werkseinheit gefunden!`,
        },
      },
      shift: {
        notFound: $localize`:error message|shift not found:Keine offene Schicht gefunden`,
        closed: $localize`:error message|shift closed:Die Schicht ist geschlossen`,
        cantOpen: $localize`:error message|shift cant open:Die Schicht kann nicht erneut geöffnet werden. Das Zeitlimit wurde überschritten`,
        cantClose: $localize`:error message|shift cant close:Die Schicht kann nicht geschlossen werden, sie befindet sich im falschen Zustand`,
        cantHandover: $localize`:error message|shift cant handover:Es wurde keine Schicht zur Übergabe an den aktuellen Benutzer gefunden`,
        split: {
          sameStartOrEndDate: $localize`:error message|shift date same as start or end date:Die neue Startzeit der Schicht kann nicht mit dem Start- oder Enddatum der aktuellen Schicht übereinstimmen`,
          beforeStartDate: $localize`:error message|shift date before start date:Neue Schichtbeginnzeit darf nicht vor der Schichtbeginnzeit der aufzuteilenden Schicht liegen.`,
          afterEndDate: $localize`:error message|shift date after end date: Neue Schichtendezeit darf nicht nach der Schichtendezeit der aufzuteilenden Schicht liegen.`,
          noShiftType: $localize`:error message|no shift type selected:Kein Typ für neue Schicht ausgewählt`,
          noSupervisor: $localize`:error message|no shift supervisor selected:Kein Vorgesetzter für die neue Schicht ausgewählt`,
        },
      },
      shiftbook: {
        notFound: $localize`:error message|shiftbook not found:Schichtbuch konnte nicht gefunden werden`,
        alreadyFinalized: $localize`:error message|shiftbook finalized:Die Aktualisierung des Eintrags ist fehlgeschlagen, da er bereits abgeschlossen ist.`,
        inconsistent: $localize`:error message|shiftbook inconsistent:Die Erstellung des Schichtbucheintrags ist fehlgeschlagen, da er inkonsistent ist.`,
        tampered: $localize`:error message|shiftbook tampered:Die Erstellung des Schichtbucheintrags ist fehlgeschlagen, da er manipuliert wurde.`,
      },
      logbook: {
        notFound: $localize`:error message|logbook not found:Logbuch konnte nicht gefunden werden`,
        alreadyFinalized: $localize`:error message|logbook finalized:Die Aktualisierung des Eintrags ist fehlgeschlagen, da er bereits abgeschlossen ist.`,
        inconsistent: $localize`:error message|logbook inconsistent:Die Erstellung des Logbucheintrags ist fehlgeschlagen, da er inkonsistent ist.`,
        tampered: $localize`:error message|logbook tampered:Die Erstellung des Logbucheintrags ist fehlgeschlagen, da er manipuliert wurde.`,
        duplicate: {
          logbookDate: $localize`:error message|duplicate logbookDate present:Zustandsübergang existiert bereits für die angegebene Logbuchzeit!`,
        },
        readOnly: {
          editNotAllowed: $localize`:error message|read only category log edit not allowed label:Protokoll mit schreibgeschützter Kategorie kann nicht aktualisiert werden!`,
        },
        breakdown: {
          stateNotAllowed: $localize`:error message|breakdown state log edit not allowed label:Ungültige Zustandsänderung für das Fehlerprotokoll!`,
        },
      },
      facilityUsage: {
        notFound: $localize`:error message|facilityUsage not found:Im Facility-Nutzungsdatensatz für den Typ „Manuell“ wurde nichts gefunden`,
        state: {
          idNotNull: $localize`:error message|facilityUsage state id not null:Die Einrichtungs-ID für das manuelle Speichern darf nicht null sein`,
          noOperation: $localize`:error message|facilityUsage state no operation: Die Gesamtbetriebszeit ist fü?r diese Betriebseinheit nicht eingestellt.`,
        },
      },
      facilityReport: {
        notFound: $localize`:error message|facilityReport notFound:Der Statusbericht der Anlageneinheit ist nicht verfügbar.`,
        exists: $localize`:error message|facilityReport exist: Für diese Schicht ist bereits ein Statusbericht für die Anlageneinheit verfügbar.`,
      },
      message: {
        notFound: $localize`:error message|message not found:Nachricht konnte nicht gefunden werden`,
        duplicate: $localize`:error message|message exist:Nachrichten haben einen doppelten Wert`,
      },
      bdata: {
        noFacility: $localize`:error message|bdata plant unit not found:Kann nicht mit Anlageneinheit von KKS übereinstimmen`,
        multiFacility: $localize`:error message|bdata multiple plant unit found:Es gibt mehrere Anlageneinheiten, die zum bereitgestellten KKS passen.`,
        unknownCategory: $localize`:error message|bdata category unknown:Unbekannte Leitsystem-Kategorie`,
        noMasterCategory: $localize`:error message|bdata no master category:kategorie wurde in den Stammdaten nicht gefunden`,
        unknownState: $localize`:error message|bdata unknown facility state:Unbekannter Zustand der Anlageneinheit`,
        noAffectedShift: $localize`:error message|bdata no affected shift:In der angegebenen Protokollzeit wurde keine Verschiebung gefunden`,
        syncNotAllowed: $localize`:error message|bdata sync state not allowed:Der SYNC-Zustand ist in dieser Anlageneinheit nicht erlaubt`,
      },
      delete: {
        location: $localize`:error message|location delete:Das Löschen ist nicht möglich. Dieser Standort wird zum Erstellen einer Anlageneinheit verwendet`,
        category: $localize`:error message|category delete:Löschen nicht möglich. Diese Kategorie wird zum Erstellen eines Protokolleintrags verwendet`,
        log: {
          facilityCreation: $localize`:error message|facility creation log delete:Dieser Anlagenbuch-Eintrag kann nicht gelöscht werden`,
        },
      },
    },
  };
};
