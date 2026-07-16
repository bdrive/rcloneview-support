---
slug: secure-rcloneview-app-lock-password
title: "RcloneView mit App Lock absichern: Remotes, Jobs und Verlauf schützen"
authors:
  - tayson
description: "Fügen Sie RcloneView mit App Lock eine Passwortsperre hinzu, damit nur autorisierte Benutzer Remotes, Übertragungsverlauf, Jobs, Mounts und die interne Datenbank einsehen können – selbst auf gemeinsam genutzten PCs."
keywords:
  - rcloneview sicherheit
  - rcloneview app lock
  - rclone passwortschutz
  - sichere rclone gui
  - rclone remotes schützen
  - rclone_view.db
  - cloud-automatisierung sicherheit
  - sicherheit gemeinsamer pc
  - schutz des job-verlaufs
  - schutz des übertragungsverlaufs
tags:
  - security
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';


# RcloneView mit App Lock absichern: Remotes, Jobs und Verlauf schützen

> Gemeinsam genutzter oder Firmen-PC? Aktivieren Sie App Lock, damit ein Passwort erforderlich ist, bevor jemand RcloneView öffnen kann – so bleiben Remotes, Jobs und Übertragungsverlauf verborgen.

Die App-Lock-Funktion von RcloneView fügt beim Start oder erneuten Öffnen der App einen einfachen Passwortbildschirm hinzu. Sie schützt die interne Datenbank (`rclone_view.db`), die Ihre Remotes, Job-Definitionen, Mount-Einstellungen, den Job-Verlauf und die Übertragungsprotokolle enthält – so bleibt sensible Automatisierung privat, selbst wenn der Arbeitsplatz gemeinsam genutzt wird.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Was App Lock schützt

- Remote-Definitionen und Zugangsdaten, gespeichert in `rclone.conf` (Zugriff wird von der App kontrolliert)  
- Übertragungsverlauf und Protokolle  
- Job-Einstellungen und Zeitpläne  
- Mount-Konfigurationen und UI-Status  
- Die SQLite-Datenbank (`rclone_view.db`), die alles miteinander verbindet

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## Wer davon profitiert

- Teams, die sich einen Arbeitsplatz oder Jump-Host teilen  
- IT-Administratoren, die geplante Sync-/Mount-Jobs betreiben und Manipulationsschutz benötigen  
- Benutzer mit sensiblen Cloud-übergreifenden Workflows (Backups, Compliance-Archive)  
- Jeder, der ohne Änderungen auf Betriebssystemebene schnell eine zusätzliche Sicherheitsebene möchte

## So aktivieren Sie App Lock (dauert eine Minute)

1) Öffnen Sie **Settings → General Settings** im oberen Menü.  
<img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open Settings menu" />

2) Aktivieren Sie unter **General** die Option **Enable App Lock**, geben Sie Ihr Passwort ein und klicken Sie auf **Close**.  
<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

Das war's schon. Beim nächsten Start von RcloneView oder erneutem Öffnen des Fensters sehen Sie die Entsperr-Aufforderung.

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## Zurücksetzen bei vergessenem Passwort

- Klicken Sie auf dem Entsperrbildschirm auf **Reset App**.  
- Bestätigen Sie das Zurücksetzen, um App Lock und alle internen Daten (Einstellungen, Jobs, Übertragungsverlauf, Job-Verlauf) zu löschen.  
- Ihre `rclone.conf` bleibt unverändert erhalten, sodass die Remote-Definitionen nach dem erneuten Öffnen weiterhin verfügbar sind.

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

## Best Practices für sicheren Betrieb

- Verwenden Sie App Lock auf gemeinsam genutzten PCs oder in Büros, in denen mehrere Benutzer Ihre Sitzung öffnen können.  
- Kombinieren Sie es mit Betriebssystem-Kontopasswörtern oder Festplattenverschlüsselung für mehrschichtigen Schutz.  
- Benennen Sie Jobs eindeutig, vermeiden Sie aber, Geheimnisse in Job-Namen oder Notizen einzubetten.  
- Sichern Sie `rclone_view.db` an einem geschützten, für den Benutzer beschreibbaren Ort (siehe [Datenbankspeicherort ändern](/tutorials/change-rcloneview-database-location)).  
- Halten Sie den Scheduler nur für Jobs aktiv, denen Sie vertrauen, und überwachen Sie diese über den Job-Verlauf.

## Kurz-FAQ

**Stoppt App Lock geplante Jobs?**  
Nein – von Ihnen geplante Jobs laufen weiter. App Lock beschränkt nur den UI-Zugriff, damit andere sie nicht einsehen oder ändern können.

**Was passiert, wenn ich App Lock zurücksetze?**  
Interne Daten werden gelöscht, aber `rclone.conf` bleibt erhalten, sodass die Remotes bestehen bleiben. Erstellen Sie Jobs/Verlauf bei Bedarf neu.

**Kann ich das Terminal trotzdem nutzen?**  
Ja. Sobald entsperrt, funktioniert das integrierte Terminal normal; App Lock schränkt nur den Zugriff beim Start ein.

## Fazit

Eine Passwortabfrage mag klein erscheinen, ist aber ein wirksamer Schutz für Remotes, Automatisierung und Verlauf. Aktivieren Sie App Lock, bewahren Sie Ihre `rclone_view.db` an einem sicheren Ort auf und führen Sie Ihre Cloud-Workflows im Wissen aus, dass sie privat bleiben – selbst auf gemeinsam genutzten Rechnern.

<CloudSupportGrid />
