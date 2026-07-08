---
slug: fix-onedrive-shared-folder-sync-errors-rcloneview
title: "OneDrive-Fehler bei der Synchronisation freigegebener Ordner beheben — Lösung mit RcloneView"
authors:
  - tayson
description: "Beheben Sie Fehler bei der Synchronisation freigegebener OneDrive-Ordner in RcloneView. Beheben Sie Berechtigungsfehler, fehlende freigegebene Laufwerke und Zugriffsprobleme beim Synchronisieren freigegebener OneDrive-Inhalte."
keywords:
  - OneDrive Fehler bei freigegebenen Ordnern
  - OneDrive Sync-Fix
  - OneDrive freigegebenes Laufwerk RcloneView
  - OneDrive Berechtigungen beheben
  - OneDrive Zugriff auf freigegebene Ordner
  - Microsoft OneDrive Fehlerbehebung
  - OneDrive Sync-Problem
  - RcloneView OneDrive-Fehler
  - OneDrive for Business Synchronisation
  - Cloud-Sync-Fehlerbehebung
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive-Fehler bei der Synchronisation freigegebener Ordner beheben — Lösung mit RcloneView

> Diagnostizieren und beheben Sie Fehler bei der Synchronisation freigegebener OneDrive-Ordner in RcloneView — von Berechtigungsfehlern und fehlenden Verknüpfungen bis hin zu Zugriffsproblemen bei organisatorischem OneDrive for Business.

Das System für freigegebene Ordner in OneDrive weist Besonderheiten auf, die vielen Sync-Tools Probleme bereiten. Ordner, die Ihnen von Kollegen freigegeben wurden, verhalten sich nicht wie Ihr eigener OneDrive-Speicher — sie erscheinen anders in der API und erfordern eine spezifische Konfiguration für den Zugriff mit rclone. Wenn RcloneView einen freigegebenen Ordner nicht sehen oder synchronisieren kann, liegt die Ursache fast immer in einem von wenigen bekannten Problemen. Dieser Leitfaden behandelt die häufigsten Fehler bei der Synchronisation freigegebener Ordner und deren Lösung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Freigegebene Ordner sind in RcloneView nicht sichtbar

OneDrive stellt freigegebene Ordner anders dar als Ihren eigenen Speicher. Ordner, die aus dem OneDrive eines anderen Benutzers freigegeben wurden, erscheinen im Webinterface unter dem Bereich „Geteilt", sind aber in der API nicht automatisch Teil Ihres Stammordners, sofern Sie sie nicht als Verknüpfung zu Ihrem OneDrive hinzugefügt haben.

**Lösung:** Suchen Sie im OneDrive-Webinterface den freigegebenen Ordner, den Sie synchronisieren möchten, und klicken Sie auf „Verknüpfung zu meinen Dateien hinzufügen". Dadurch wird in Ihrem eigenen OneDrive-Stammordner eine Verknüpfung erstellt, die über die Standard-API zugänglich ist — und somit in RcloneView sichtbar und synchronisierbar. Aktualisieren Sie nach dem Hinzufügen der Verknüpfung den RcloneView File Explorer, indem Sie F5 drücken oder auf Neu laden klicken.

<img src="/support/images/en/blog/new-remote.png" alt="OneDrive shared folder access configuration in RcloneView" class="img-large img-center" />

## Berechtigungsfehler bei der Synchronisation freigegebener Ordner

Ein 403-Forbidden- oder „Zugriff verweigert"-Fehler bei der Synchronisation eines freigegebenen OneDrive-Ordners deutet typischerweise auf eine von drei Situationen hin:

1. **Schreibgeschützte Freigabe:** Der Ordnereigentümer hat den Ordner mit reinen Ansichtsberechtigungen freigegeben. Sie können weder schreiben noch löschen. Wenn Sie in eine Richtung synchronisieren möchten, die Schreibzugriff erfordert, bestätigen Sie beim Ordnereigentümer, dass Sie Bearbeitungsberechtigungen haben.

2. **Einschränkungen beim Gastzugriff:** Externe (Gast-)Konten in OneDrive for Business haben eingeschränkten API-Zugriff. Einige Synchronisationsvorgänge werden durch die Freigaberichtlinie der Organisation blockiert.

3. **Conditional-Access-Richtlinien:** Firmen-Tenants von Microsoft 365 können Conditional-Access-Richtlinien erzwingen, die den API-Zugriff von nicht konformen Geräten oder Anwendungen einschränken. Wenden Sie sich an Ihren IT-Administrator, wenn wiederholt Authentifizierungsfehler auftreten, obwohl Sie sich erfolgreich angemeldet haben.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Diagnosing OneDrive shared folder permission errors in RcloneView" class="img-large img-center" />

## Probleme mit freigegebenen OneDrive for Business-Bibliotheken

SharePoint-basierte Bibliotheken (einschließlich SharePoint-Dokumentbibliotheken, die als OneDrive-Ordner angezeigt werden) erfordern eine separate Remote-Einrichtung in RcloneView. Fügen Sie statt des persönlichen OneDrive-Remotes einen SharePoint-Remote hinzu, der auf die URL der Site verweist, oder verwenden Sie OneDrive for Business mit der entsprechenden SharePoint-Site-Konfiguration.

Für Teams, die häufig auf Fehler wegen Pfadlänge bei OneDrive for Business stoßen, kann rclones `--onedrive-no-versions`-Flag den API-Overhead bei Synchronisationsvorgängen reduzieren. Fügen Sie benutzerdefinierte Flags über Settings > Embedded Rclone > Global Rclone Flags in RcloneView hinzu.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing OneDrive sync job history and error logs in RcloneView" class="img-large img-center" />

## Erneute Authentifizierung bei einem abgelaufenen Token

OAuth-Tokens von OneDrive können ablaufen oder ungültig werden — insbesondere nach einer Passwortänderung, einer Aktualisierung der Multi-Faktor-Authentifizierung oder einem Sicherheitsereignis des Kontos. Ein abgelaufenes Token äußert sich in wiederholten 401-Unauthorized-Fehlern während der Synchronisation.

Öffnen Sie zur erneuten Authentifizierung den Remote Manager im Remote-Tab von RcloneView, wählen Sie Ihren OneDrive-Remote aus und bearbeiten Sie ihn. Der Bearbeitungsworkflow fordert Sie auf, den OAuth-Vorgang erneut auszuführen, und öffnet dazu ein Browserfenster für die erneute Anmeldung. Speichern Sie nach Abschluss der neuen Anmeldung den aktualisierten Remote und starten Sie den Sync-Job erneut.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie freigegebene Ordner zunächst im OneDrive-Webinterface als „Verknüpfungen zu meinen Dateien" hinzu.
3. Bestätigen Sie, dass Sie die richtigen Berechtigungen (Bearbeiten, nicht nur Anzeigen) für die zu synchronisierenden Ordner haben.
4. Authentifizieren Sie Ihren OneDrive-Remote erneut, wenn wiederholt 401-Fehler auftreten.

Die meisten Probleme mit freigegebenen OneDrive-Ordnern lassen sich auf die Unterscheidungen auf API-Ebene von Microsoft zwischen eigenen, freigegebenen und verknüpften Ordnern zurückführen — wenn man das versteht, wird die Fehlerbehebung deutlich direkter.

---

**Verwandte Leitfäden:**

- [OneDrive-Cloud-Synchronisation und -Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [OneDrive-Sync-Fehler beheben: Delta-Token und Pfadlänge mit RcloneView](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)
- [OAuth-Token-abgelaufen-Fehler bei der Cloud-Synchronisation mit RcloneView beheben](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
