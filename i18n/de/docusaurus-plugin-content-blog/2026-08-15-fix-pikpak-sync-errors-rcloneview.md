---
slug: fix-pikpak-sync-errors-rcloneview
title: "PikPak-Synchronisationsfehler beheben — Verbindungsprobleme mit RcloneView lösen"
authors:
  - steve
description: "Beheben Sie häufige PikPak-Synchronisations- und Verbindungsfehler in RcloneView mit Dry-Run-Prüfungen, Wiederholungseinstellungen und OAuth-Neuauthentifizierung."
keywords:
  - PikPak Synchronisationsfehler
  - PikPak RcloneView
  - PikPak Verbindung reparieren
  - PikPak OAuth-Token
  - PikPak Backup-Fehler
  - Cloud-Synchronisation Fehlerbehebung
  - PikPak Dateiübertragung
  - rclone PikPak Probleme
  - PikPak Synchronisation wiederholen
tags:
  - RcloneView
  - troubleshooting
  - tips
  - pikpak
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# PikPak-Synchronisationsfehler beheben — Verbindungsprobleme mit RcloneView lösen

> Ins Stocken geratene Übertragungen und fehlgeschlagene PikPak-Jobs lassen sich meist auf eine Handvoll behebbarer Ursachen zurückführen — so diagnostizieren und lösen Sie sie in RcloneView.

PikPak-Sync-Jobs, die auf halbem Weg fehlschlagen, ohne Fortschritt hängen bleiben oder Verbindungsfehler werfen, sind besonders ärgerlich, wenn Sie sich auf geplante Backups verlassen. Die meisten dieser Probleme lassen sich auf abgelaufene Token, zu aggressiv eingestellte Übertragungsparallelität oder Filter zurückführen, die stillschweigend Dateien ausschließen, die Sie eigentlich synchronisieren wollten. RcloneView stellt Ihnen die Diagnosewerkzeuge — Job History, Dry Run und das integrierte Terminal — zur Verfügung, um die tatsächliche Ursache zu isolieren, statt zu raten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Den Fehler in der Job History diagnostizieren

Bevor Sie Einstellungen ändern, öffnen Sie den Job Manager und prüfen den fehlgeschlagenen Lauf in der Job History. Das Feld Status zeigt, ob der Job Errored war oder Canceled wurde, und Time Spent verrät, ob er sofort fehlgeschlagen ist (meist Authentifizierung) oder erst nach einer Weile (meist eine bestimmte Datei oder eine Netzwerkunterbrechung). Filtern Sie nach Datumsbereich, um einen fehlgeschlagenen Lauf mit einem vorherigen erfolgreichen zu vergleichen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Überprüfen eines fehlgeschlagenen PikPak-Sync-Jobs in der RcloneView Job History" class="img-large img-center" />

Schlägt der Job bei jedem Versuch sofort fehl, ist die Verbindung des PikPak-Remotes wahrscheinlich unterbrochen — testen Sie sie im Remote Manager erneut, bevor Sie an den Sync-Einstellungen etwas ändern.

## Remote neu authentifizieren und erneut testen

Öffnen Sie den Remote Manager, wählen Sie Ihr PikPak-Remote aus und prüfen Sie, ob die Verbindung weiterhin erfolgreich ist. Schlägt der Test fehl, muss das Remote mit neuen Zugangsdaten neu hinzugefügt werden — PikPak-Verbindungen können nach längerer Inaktivität eine erneute Authentifizierung erfordern. Sobald der Test erfolgreich ist, führen Sie denselben Job einmalig aus, bevor Sie ihn wieder in Ihren Zeitplan speichern.

<img src="/support/images/en/blog/new-remote.png" alt="Testen einer PikPak-Remote-Verbindung im RcloneView Remote Manager" class="img-large img-center" />

RcloneView verbindet PikPak zusammen mit über 90 weiteren Anbietern im selben Fenster, sodass die erneute Authentifizierung eines Remotes nie Ihre anderen konfigurierten Clouds oder Sync-Jobs stört.

## Übertragungseinstellungen und Filter anpassen

Wenn die Verbindungstests erfolgreich sind, Übertragungen aber weiterhin ins Stocken geraten, öffnen Sie die Advanced Settings des Sync-Jobs und verringern Sie die Anzahl gleichzeitiger Dateiübertragungen sowie der Equality Checkers — PikPak kann aggressive parallele Anfragen drosseln. Prüfen Sie außerdem die Filtering Settings in Schritt 3: Ein zu breit gefasster max file age- oder Größenfilter kann stillschweigend Dateien überspringen, die eigentlich synchronisiert werden sollten — das sieht wie ein Fehler aus, ist aber keiner.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Anpassen der Sync-Job-Einstellungen für ein PikPak-Backup in RcloneView" class="img-large img-center" />

Führen Sie nach jeder Einstellungsänderung einen Dry Run aus. Er listet genau auf, welche Dateien kopiert oder gelöscht würden, ohne Ihr PikPak-Konto zu berühren, sodass Sie bestätigen können, dass die Korrektur funktioniert hat, bevor Sie eine echte Synchronisation ausführen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Prüfen Sie den Eintrag des fehlgeschlagenen Jobs in der Job History, um festzustellen, wann und wie er fehlgeschlagen ist.
3. Testen Sie die PikPak-Remote-Verbindung im Remote Manager erneut und erneuern Sie bei Bedarf die Zugangsdaten.
4. Verringern Sie die Übertragungsparallelität, prüfen Sie die Filter erneut und bestätigen Sie mit einem Dry Run, bevor Sie neu planen.

Ein paar Minuten, die Sie in der Job History zur Ursachenfindung investieren, sparen weit mehr Zeit als das wiederholte erneute Ausführen eines Jobs, dessen Fehlerursache Sie noch nicht kennen.

---

**Verwandte Anleitungen:**

- [PikPak verwalten — Cloud-Downloads mit RcloneView](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)
- [PikPak zu Google Drive migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [PikPak mit Google Drive und S3 synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-pikpak-cloud-google-drive-s3-rcloneview)

<CloudSupportGrid />
