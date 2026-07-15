---
sidebar_position: 2
description: "Beheben Sie fehlende Desktop-, Dokumente- oder Downloads-Ordner in RcloneView unter macOS, indem Sie Berechtigungen erteilen, Voller Festplattenzugriff aktivieren und Logs für den Support sammeln."
keywords:
  - rcloneview
  - macos
  - permissions
  - files and folders
  - full disk access
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - Permissions
date: 2025-11-07
author: Jay
---
# Lokale Ordner unter Mac nicht sichtbar (Desktop/Dokumente/Downloads)

Wenn Sie RcloneView gerade unter macOS installiert haben und Ordner wie **Desktop**, **Dokumente** oder **Downloads** im linken Bereich „Local Disk“ nicht sehen, liegt fast immer ein macOS-Datenschutz-Berechtigungsproblem vor. Diese Anleitung zeigt, wie Sie den Zugriff erlauben und was Sie tun können, wenn Ordner weiterhin leer erscheinen.

Für einen kurzen Überblick über den Explorer selbst siehe: [Remote-Speicher durchsuchen und verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage).

## Warum das passiert

Seit macOS 10.15 (Catalina) verlangt Apple, dass Apps um Erlaubnis bitten, bevor sie auf geschützte Ordner wie Desktop, Dokumente und Downloads zugreifen. Wenn Sie auf „Nicht erlauben“ geklickt haben oder die App noch keine Berechtigung besitzt, werden diese Ordner in RcloneView leer angezeigt.

## Wenn ein Berechtigungs-Popup erscheint

Möglicherweise sehen Sie beim ersten Öffnen von RcloneView oder beim Klicken auf einen geschützten Ordner einen macOS-Dialog.

1) Wenn ein Popup erscheint, das um Zugriff auf den Ordner „Dokumente“ bittet, klicken Sie auf **Erlauben**.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files1.png" alt="mac allow access to folder and files1" class="img-medium img-center" />

2) Wenn Sie im linken Bereich auf einen geschützten Ordner klicken (z. B. Downloads) und eine ähnliche Aufforderung erscheint, klicken Sie auf **Erlauben**.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files2.png" alt="mac allow access to folder and files2" class="img-medium img-center" />

3) Wenn Sie auf **Nicht erlauben** geklickt haben, sieht der Ordner so lange leer aus, bis die Berechtigung erteilt wird.

<img src="/support/images/en/howto/FAQ/empth-folder-by-dont-allow.png" alt="empth folder by dont allow" class="img-large img-center" />

## Beheben: Zugriff in den Systemeinstellungen erteilen (erste Maßnahme)

Wenn die Ordner weiterhin leer erscheinen oder Sie versehentlich auf „Nicht erlauben“ geklickt haben, erteilen Sie den Zugriff über die macOS-Systemeinstellungen.

**Schritte (macOS Ventura, Sonoma, Sequoia):**

1. Öffnen Sie `Systemeinstellungen > Datenschutz & Sicherheit > Dateien & Ordner`.
2. Suchen Sie **RcloneView**.
3. Aktivieren Sie die Schalter für die gewünschten Ordner (z. B. **Dokumente-Ordner**, **Downloads-Ordner**).  
4. Öffnen Sie den Ordner erneut in RcloneView.

<img src="/support/images/en/howto/FAQ/change-setting-for-accessing-to-files-and-folders.png" alt="change setting for accessing to files and folders" class="img-large img-center" />

Wenn RcloneView nicht in dieser Liste erscheint, starten Sie RcloneView einmal, versuchen Sie, einen geschützten Ordner zu öffnen, und macOS sollte erneut nachfragen.

## Funktioniert immer noch nicht? Vollen Festplattenzugriff hinzufügen (zweite Maßnahme)

Wenn die Schalter unter „Dateien & Ordner“ aktiviert sind und Sie den Inhalt trotzdem nicht durchsuchen können, fügen Sie RcloneView zum **Vollen Festplattenzugriff** hinzu.

1. Öffnen Sie `Systemeinstellungen > Datenschutz & Sicherheit > Voller Festplattenzugriff`.
2. Klicken Sie auf die Schaltfläche `+` und wählen Sie die App **RcloneView** aus `Programme`.
3. Stellen Sie sicher, dass der Schalter für RcloneView aktiviert ist.
4. Starten Sie RcloneView neu und versuchen Sie es erneut.

<img src="/support/images/en/howto/FAQ/mac-allow-full-disk-access.png" alt="mac allow full disk access" class="img-medium img-center" />

## Benötigen Sie weiterhin Hilfe? Logs sammeln und Support kontaktieren

Wenn der Zugriff nach den obigen Schritten weiterhin blockiert ist, senden Sie uns bitte Logs, damit wir helfen können.

1. Öffnen Sie in RcloneView `Einstellungen > Embedded Rclone`.
2. Aktivieren Sie unter **Logging-Konfiguration** die Protokollierung, wählen Sie einen **Log-Ordner**, behalten Sie den Dateinamen bei (z. B. `rclone.log`) und setzen Sie die **Log-Stufe** auf **DEBUG**.
3. Klicken Sie auf **Embedded Rclone neu starten**, um die Änderungen zu übernehmen.
4. Reproduzieren Sie das Problem (versuchen Sie, den betroffenen Ordner zu öffnen) und senden Sie dann die Log-Datei mit einer kurzen Beschreibung der durchgeführten Schritte an [rcloneview@bdrive.com](mailto:rcloneview@bdrive.com).

:::caution Neustart erforderlich
Logs werden erst erfasst, nachdem Sie auf **Embedded Rclone neu starten** geklickt haben. Überspringen Sie diesen Schritt nicht.
:::

<img src="/support/images/en/howto/FAQ/setting-for-collecting-log-file.png" alt="setting for collecting log file" class="img-large img-center" />

## Verwandte Anleitungen

- Verwaltung lokaler/Cloud-Dateien im Explorer: [Remote-Speicher durchsuchen und verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- Vollständiger Überblick über die Einstellungen (einschließlich Embedded Rclone und Protokollierung): [Allgemeine Einstellungen](/howto/rcloneview-basic/general-settings#logging-configuration)

---

Wenn Sie weitere Hilfe benötigen, schreiben Sie uns eine E-Mail an **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**.
