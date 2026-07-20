---
sidebar_position: 10
description: "Erfahren Sie, wie Sie allgemeine Einstellungen, das Oberflächenlayout, Benachrichtigungen und die eingebetteten Rclone-Einstellungen in RcloneView konfigurieren."
keywords:
  - rcloneview
  - rclone
  - rcloneview settings
  - allgemeine Einstellungen
  - dark mode
  - rclone log
  - rclone configurations
tags:
  - RcloneView
  - settings
  - configuration
  - preferences
date: 2025-06-22
author: Jay
---
# Allgemeine Einstellungen

Das **Einstellungen**-Menü von RcloneView ist zur besseren Übersicht und Anpassbarkeit in vier Tabs unterteilt:

- **Allgemein**
- **Oberflächen & Benachrichtigungen**
- **Eingebettetes Rclone**
- **Netzwerk & Sonstiges**

Jeder Tab ermöglicht die Konfiguration unterschiedlicher Teile der Anwendung. Im Folgenden finden Sie eine Aufschlüsselung der einzelnen Bereiche.

---

## 🛠 Allgemein

<img src="/support/images/en/howto/rcloneview-basic/general-settings.png" alt="general settings" class="img-medium img-center" />
### Sprache

- **Sprache**: Wählen Sie Ihre bevorzugte UI-Sprache aus dem Dropdown-Menü.

### Startverhalten

- **Bei Anmeldung starten**: Startet RcloneView automatisch, wenn Sie sich an Ihrem System anmelden.

:::important Autostart: Zeitplanung und Einbinden

Wenn **Bei Anmeldung starten** aktiviert ist:  

- Alle im [**Job-Scheduler**](/howto/rcloneview-advanced/job-scheduling-and-execution) definierten geplanten Aufgaben werden bei der Anmeldung automatisch ausgeführt.  
- Alle im [**Mount-Manager**](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer) für das automatische Einbinden konfigurierten Remotes werden automatisch eingebunden(mount), sobald RcloneView startet.  
:::

- **Minimiert starten**: Startet RcloneView direkt im System-Tray.

- **Synology NAS automatisch erkennen**: Durchsucht das lokale Netzwerk automatisch nach Synology-NAS-Geräten.

### Zurücksetzen

- **Standardeinstellungen wiederherstellen**: Setzt alle Optionen auf ihre ursprünglichen Standardwerte zurück.

---

## 🎛  Oberflächen & Benachrichtigungen

<img src="/support/images/en/howto/rcloneview-basic/interface-settings.png" alt="interface settings" class="img-medium img-center" />
### Erscheinungsbild der Oberfläche

- **Dark Mode**: Wechselt zwischen hellem und dunklem Design.
- **Themenfarbe**: Wählen Sie aus den verfügbaren Akzentfarben.

### Ziehen und Ablegen (Drag and Drop)

- **Drag and Drop bestätigen**: Zeigt ein Bestätigungsfenster an, wenn Dateien per Drag-and-Drop verschoben werden.

### Anzuzeigende Job-Typen (Filter für das Übertragungsprotokoll)

Wählen Sie aus, welche Job-Typen im Panel des Übertragungsprotokolls angezeigt werden sollen:
- **Download**
- **Upload**
- **Synchronisation**

<img src="/support/images/en/howto/rcloneview-basic/notification-dialogs-settings.png" alt="notification dialogs settings" class="img-medium img-center" />
### Benachrichtigungsdialoge

Legen Sie fest, welche Arten von Popup-Benachrichtigungen Sie während der Nutzung von RcloneView erhalten möchten:

- **Job-Statusprotokoll anzeigen**: Zeigt nach Abschluss jedes Übertragungsjobs ein detailliertes Protokollfenster an.
- **Vergleich abgeschlossen anzeigen**: Benachrichtigt Sie, wenn ein Ordnervergleich erfolgreich abgeschlossen wurde.
- **Bestätigung vor dem Löschen von Dateien im Vergleich anzeigen**: Fragt vor dem Löschen von Dateien während eines Ordnervergleichs um Bestätigung.
- **Benachrichtigung über abgeschlossene Synchronisation anzeigen**: Zeigt eine Meldung an, wenn ein Synchronisationsvorgang abgeschlossen ist.
- **Dialog für Netzwerkfehler anzeigen**: Warnt Sie sofort, wenn während eines Jobs ein Netzwerkverbindungsfehler auftritt.

---

## ⚙️ Eingebettetes Rclone

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-settings.png" alt="embedded rclone settings" class="img-medium img-center" />

### Lebenszyklus der eingebetteten Instanz

- **rclone beim Beenden der App stoppen**: Beendet automatisch den eingebetteten `rclone`-Prozess, wenn RcloneView geschlossen wird.

:::caution Neustart nach jeder Änderung erforderlich

Nachdem Sie eine Einstellung im Tab **Eingebettetes Rclone** geändert haben — einschließlich Pfadkonfiguration, globaler Flags oder Protokollierungsoptionen — klicken Sie auf **Eingebettetes Rclone neu starten**, um die Änderungen zu übernehmen.  
Dadurch wird der eingebettete Rclone-Prozess neu gestartet, was aktuell laufende Jobs unterbrechen kann.

:::
### Pfadeinstellungen

- **Lokaler Rclone-Speicherort**: Absoluter Pfad zu Ihrer `rclone`-Binärdatei.
- **Lokaler Speicherort der Rclone-Konfiguration**: Pfad zu Ihrer `rclone.conf`-Datei (enthält Remote-Informationen).
- **Standard-Download-Ordner**: Verzeichnis, in dem heruntergeladene Dateien gespeichert werden.
- **Standard-Upload-Ordner**: Verzeichnis, das als Quelle für Upload-Jobs verwendet wird.

   <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-advanced-options-settings.png" alt="embedded rclone advanced options settings" class="img-medium img-center" />
### Erweiterte Optionen

- **Globale Rclone-Flags**: Zusätzliche Flags, die an rclone übergeben werden (z. B. `--s3-directory-markers`).
- **Konfigurationspasswort**: Passwort für verschlüsselte rclone-Konfigurationen. Wenn Sie dieses Passwort festlegen, werden die rclone-Konfigurationsdateien verschlüsselt.

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-logging-configuration-settings.png" alt="embedded rclone logging configuration settings" class="img-medium img-center" />
### Protokollierungskonfiguration

- **rclone-Protokollierung aktivieren**: Aktiviert die dateibasierte Protokollierung für Rclone-Vorgänge.
- **Protokollordner**: Verzeichnis zum Speichern der Protokolldateien.
- **Protokolldateiname**: Standarddateiname für Protokolle.
- **Protokollstufe**: Wählen Sie die Detailstufe (DEBUG, INFO, NOTICE, ERROR).

---

## 🌐 Netzwerk & Sonstiges

<img src="/support/images/en/howto/rcloneview-basic/network-etc-settings.png" alt="network etc settings" class="img-medium img-center" />

### Netzwerk

- **Proxy-Einstellungen**: Proxy konfigurieren (Funktion demnächst verfügbar).
- **Rclone-Verbindungsmanager**: Aktive Rclone-Verbindungen anzeigen oder verwalten.  
  → [Mehr erfahren](/howto/rcloneview-basic/connection-manager)

### Diagnose

- **Anwendungsprotokoll**: Öffnet interne Protokolle zur Unterstützung bei der Fehlerbehebung oder Fehlermeldung.

---

## ✅ Zusammenfassung

Mit diesen Einstellungen können Sie vollständig steuern, wie sich RcloneView beim Start verhält, wie es mit Rclone kommuniziert und wie es Ihnen Job-Ergebnisse oder Fehler mitteilt. Passen Sie sie an Ihren Arbeitsablauf an, egal ob Sie Synchronisationen planen, Laufwerke automatisch einbinden(mount) oder Netzwerkprobleme beheben.
