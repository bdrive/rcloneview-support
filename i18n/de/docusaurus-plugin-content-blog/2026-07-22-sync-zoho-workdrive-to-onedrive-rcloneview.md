---
slug: sync-zoho-workdrive-to-onedrive-rcloneview
title: "Zoho WorkDrive mit OneDrive synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - steve
description: "Synchronisieren Sie Dateien von Zoho WorkDrive zu Microsoft OneDrive mit RcloneView und halten Sie beide Business-Speicherkonten gesichert und aktuell."
keywords:
  - Zoho WorkDrive mit OneDrive synchronisieren
  - Zoho WorkDrive Backup
  - Zoho WorkDrive OneDrive Migration
  - RcloneView Zoho WorkDrive
  - Cross-Cloud Business-Backup
  - Microsoft OneDrive Sync-Tool
  - Multi-Cloud-Dateiübertragung
  - Cloud-zu-Cloud-Sync GUI
  - Business-Dateispeicher-Backup
tags:
  - RcloneView
  - zoho
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDrive mit OneDrive synchronisieren — Cloud-Backup mit RcloneView

> Behalten Sie ein laufendes Backup Ihrer Zoho-WorkDrive-Teamordner auf Microsoft OneDrive, ohne Dateien manuell zu exportieren oder für jede Abteilung einen eigenen Übertragungsjob zu skripten.

Teams, die auf Zoho WorkDrive für die tägliche Zusammenarbeit setzen, benötigen oft dennoch eine Präsenz auf Microsoft OneDrive — sei es für einen Kunden, der ausschließlich im Microsoft-Ökosystem arbeitet, wegen einer Fusion, durch die zwei Speicherplattformen gleichzeitig im Einsatz sind, oder einfach, weil man eine zweite Kopie der Geschäftsdateien außerhalb der Zoho-Infrastruktur haben möchte. Manuelles Herunterladen von WorkDrive und erneutes Hochladen zu OneDrive lässt sich nicht über eine Handvoll Dateien hinaus skalieren und hinterlässt keinerlei Aufzeichnung darüber, was wann gelaufen ist. RcloneView verbindet beide Plattformen in einer einzigen Oberfläche und macht aus dieser Übertragung einen wiederholbaren Sync-Job.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDrive und OneDrive als Remotes verbinden

OneDrive verbindet sich über einen standardmäßigen browserbasierten OAuth-Login im New-Remote-Assistenten von RcloneView — ein separater API-Schlüssel ist nicht nötig. Zoho WorkDrive erfordert bei der Einrichtung einen zusätzlichen Schritt: die Auswahl der richtigen Region für das Konto, da Zoho Daten je nach dem geografischen Standort, an dem der Workspace erstellt wurde, in unterschiedlichen Regionen hostet. Sobald beide Remotes hinzugefügt sind, erscheinen sie als separate Tabs im Explorer, und jedes kann durchsucht, gefiltert oder mit dem anderen verglichen werden, genau wie jeder lokale Ordner.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Zoho WorkDrive and OneDrive as remotes in RcloneView" class="img-large img-center" />

## Einen Sync-Job zwischen den beiden Plattformen erstellen

Im ersten Schritt des Sync-Assistenten werden Quelle (Zoho-WorkDrive-Ordner) und Ziel (OneDrive-Ordner) ausgewählt, zusammen mit einem Job-Namen und der Sync-Richtung. Der One-Way-Sync — bei dem nur das Ziel verändert wird — ist der stabile, offizielle Modus und die richtige Wahl für einen Backup-artigen Job, bei dem WorkDrive die maßgebliche Quelle bleibt. Schritt 2 behandelt Übertragungsparallelität und Gleichheitsprüfung, was nützlich ist, um es herunterzuregeln, falls die API von WorkDrive unter starker paralleler Last langsam reagiert. Die Filtereinstellungen in Schritt 3 lassen sich mit vordefinierten Filtern für Dokumente und Medien oder benutzerdefinierten Ausschlussregeln wie `/.tmp/*` auf genau die Ordner oder Dateitypen eingrenzen, die wichtig sind.

Die Synchronisierung zwischen Zoho WorkDrive und OneDrive erfordert kein Lizenz-Upgrade, da sowohl 1:N-Sync als auch grundlegendes Sync & Job Management in der FREE-Lizenz enthalten sind.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## Die Übertragung überprüfen und automatisieren

Bevor der Job auf echte Daten losgelassen wird, simuliert Dry Run die Synchronisierung und listet genau auf, welche Dateien kopiert würden, sodass ein falsch konfigurierter Filter oder ein ungewollter Ordner entdeckt werden kann, bevor sich tatsächlich etwas bewegt. Sieht der Job korrekt aus, wird er im Job Manager gespeichert, wo er manuell erneut ausgeführt oder — mit einer PLUS-Lizenz — an einen Zeitplan im Crontab-Stil angehängt werden kann, sodass das Backup von WorkDrive zu OneDrive automatisch läuft, ohne dass jemand daran denken muss, es auszulösen.

Job History protokolliert jeden Lauf — Startzeit, Dauer, Status und Gesamtzahl übertragener Dateien —, was hilfreich ist, um zu bestätigen, dass ein geplantes Backup tatsächlich abgeschlossen wurde, statt über Nacht stillschweigend fehlzuschlagen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie Zoho WorkDrive (mit Auswahl der richtigen Region) und OneDrive (per OAuth-Login) über Remote-Tab > New Remote.
3. Erstellen Sie einen One-Way-Sync-Job von Ihrem WorkDrive-Ordner zu einem OneDrive-Ziel und wenden Sie bei Bedarf Filter an.
4. Führen Sie Dry Run aus, um die Dateiliste zu bestätigen, speichern Sie dann den Job und planen Sie ihn, falls Sie eine PLUS-Lizenz haben.

Sobald beide Plattformen im selben Fenster verbunden sind, wird das Synchronhalten von Zoho WorkDrive und OneDrive zu einem geplanten Job statt zu einer wiederkehrenden manuellen Aufgabe.

---

**Weiterführende Anleitungen:**

- [Zoho WorkDrive verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Google Drive mit RcloneView als lokales Laufwerk einbinden](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [Filterregeln — Selektive Synchronisierung in RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
