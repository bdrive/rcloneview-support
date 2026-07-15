---
sidebar_position: 11
description: "Verfolgen Sie aktive und abgeschlossene Dateivorgänge wie Sync, Copy und Delete in RcloneView mit der Job Monitor-Oberfläche."
keywords:
  - rcloneview
  - Job Monitor
  - Transfer Log
  - Rclone API Logs
  - file transfer
  - sync progress
  - job logs
tags:
  - RcloneView
  - Job-Management
  - Monitoring
  - Transfer-log
  - Completed-log
  - API-log
  - Sync
date: 2025-06-22
author: Jay
---
# Job Monitor

RcloneView bietet eine **Job Monitor**-Oberfläche, mit der Benutzer den Status laufender und abgeschlossener Dateivorgänge wie Sync, Copy und Delete verfolgen, überprüfen und verwalten können. Die Oberfläche besteht aus drei Haupt-Tabs:

## Transfer-Tab - Laufende Jobs

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="transfer log" class="img-medium img-center" />
Dieser Tab zeigt alle derzeit aktiven Dateiübertragungsjobs.

**Spalten:**
- **Job**: Gibt den Vorgangstyp an (z. B. Sync, Copy, Delete).
- **Source / Destination**: Zeigt den Quell- und Zielpfad an.
- **Received Size**: Übertragene Datenmenge / Gesamtgröße.
- **Speed**: Aktuelle Übertragungsgeschwindigkeit.
- **Progress**: Visueller Fortschrittsbalken des aktuellen Jobs.
- **Percentage**: Prozentsatz des Übertragungsfortschritts.
- **Time Left**: Geschätzte verbleibende Zeit.
- **Job ID**: Interne ID zur Referenzierung dieses Jobs.
- **Cancel**: Klicken Sie auf das ❌-Symbol, um den laufenden Job abzubrechen.

## Completed-Tab - Job-Verlauf

<img src="/support/images/en/howto/rcloneview-basic/completed-log.png" alt="completed log" class="img-medium img-center" />
Dieser Tab listet alle zuvor ausgeführten Jobs und deren Ergebnisse auf.

**Spalten:**
- **Job**: Der Vorgangstyp (Sync, Copy, Delete usw.).
- **Source / Destination**: Pfad von Quelle und Ziel.
- **Status**: Ergebnisstatus (z. B. Success, Errors).
- **Started At**: Startzeit des Jobs.
- **Time Spent**: Gesamtdauer des Jobs.
- **Files**: Anzahl der übertragenen Dateien.
- **Size**: Gesamte Datengröße.
- **Speed**: Durchschnittliche Übertragungsgeschwindigkeit.
- **Job ID**: Interne Job-Referenz.
- **Delete**: <img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" />-Symbol zum Entfernen des Eintrags.

## Log-Tab - API-Kommunikationsprotokolle

<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="log tab" class="img-medium img-center" />

Dieser Tab zeigt Backend-Protokolle der Kommunikation von RcloneView mit der Rclone-API.

**Spalten:**
- **Time**: Zeitstempel der Vorgangsanfrage.
- **Event Type**: Protokollstufe (z. B. INFO, ERROR).
- **Job Type**: Der Vorgangstyp (Sync, Copy, Delete usw.).
- **Message**: Ergebnis des Vorgangs.
- **Details**: Zusätzliche interne Metadaten (z. B. Job-ID im JSON-Format).

Verwenden Sie diesen Tab zur Fehlerbehebung oder zur Überprüfung von Interaktionen auf Systemebene.

:::tip
- Jeder Job-Eintrag ist über seine **Job ID** tabübergreifend verknüpft.
- Protokolle werden automatisch in Echtzeit aktualisiert.
- Die Tabs Completed und Log behalten den Verlauf auch nach Neustarts der Anwendung bei, sofern er nicht manuell gelöscht wird.
:::
