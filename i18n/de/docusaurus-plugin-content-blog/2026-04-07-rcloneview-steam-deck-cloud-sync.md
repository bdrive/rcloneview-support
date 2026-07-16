---
slug: rcloneview-steam-deck-cloud-sync
title: "RcloneView auf dem Steam Deck für Cloud-Speicher und Spielstand-Backups nutzen"
authors:
  - tayson
description: "Die begrenzte SSD des Steam Deck macht Cloud-Speicher unverzichtbar. Erfahren Sie, wie Sie RcloneView auf dem Steam Deck installieren, um Spielstände zu sichern, Screenshots und Aufnahmen mit Google Drive, OneDrive oder S3 zu synchronisieren und Speicherplatz auf Ihrem Handheld freizugeben."
keywords:
  - steam deck cloud storage
  - steam deck game backup
  - rcloneview steam deck
  - steam deck google drive sync
  - steam deck onedrive backup
  - steam deck cloud save backup
  - steamos rcloneview install
  - steam deck screenshot sync
  - steam deck file manager
  - steam deck external cloud storage
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf dem Steam Deck für Cloud-Speicher und Spielstand-Backups nutzen

> Das Steam Deck packt einen vollwertigen PC in ein Handheld – doch seine SSD mit 64 GB, 256 GB oder 512 GB füllt sich schnell. Cloud-Speicher verwandelt Ihr Deck in ein Gerät mit praktisch unbegrenzter Kapazität für Spielstand-Backups, Screenshots, Aufnahmen und mehr.

Valves Steam Deck läuft mit SteamOS, einer auf Arch basierenden Linux-Distribution mit einem angepassten KDE-Plasma-Desktop-Modus. Zwar deckt die integrierte Steam-Cloud-Speicherfunktion einige Spiele ab, jedoch nicht Nicht-Steam-Titel, emulierte Spiele, Mod-Konfigurationen, Shader-Caches oder die Screenshots und Gameplay-Aufnahmen, die sich mit der Zeit ansammeln. Die begrenzte SSD macht die Speicherverwaltung zu einem ständigen Thema. RcloneView bietet Steam-Deck-Nutzern einen grafischen Multi-Cloud-Dateimanager, um Spielstände auf Google Drive, OneDrive oder S3 zu sichern, Screenshots und Aufnahmen mit Cloud-Speicher zu synchronisieren und große Dateien auszulagern, um Platz auf dem internen Laufwerk freizugeben. Dieser Leitfaden behandelt die Installation im Desktop-Modus, die Konfiguration von Cloud-Remotes sowie praktische Workflows, um Ihre Steam-Deck-Daten sicher und Ihren Speicherplatz schlank zu halten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Cloud-Speicher auf dem Steam Deck

Das Steam Deck ist ein leistungsfähiger Gaming-PC, doch seine Speicherbeschränkungen führen zu echten Problemen:

- **SSD-Speicherplatz füllt sich schnell** – moderne Spiele können jeweils 50-100 GB überschreiten. Selbst das 512-GB-Modell ist nach der Installation einer Handvoll AAA-Titel voll.
- **Steam Cloud deckt nicht alles ab** – viele Spiele unterstützen keine Steam-Cloud-Speicherstände. Nicht-Steam-Spiele (GOG, Epic über Kompatibilitätsschichten, emulierte Titel) verfügen überhaupt nicht über ein integriertes Cloud-Backup.
- **Screenshots und Aufnahmen häufen sich an** – das Deck macht es einfach, Screenshots zu erstellen und Gameplay aufzunehmen, doch diese Dateien belasten Ihren begrenzten Speicherplatz.
- **Mod-Konfigurationen sind fragil** – wer Spiele auf dem Deck modifiziert, dessen Konfigurationen liegen im lokalen Dateisystem und können bei einem SteamOS-Update oder Werksreset verloren gehen.
- **Kein automatisches externes Backup** – das Steam Deck verfügt über keinen integrierten Mechanismus, um beliebige Dateien in externem Cloud-Speicher zu sichern.

RcloneView löst diese Probleme, indem es Ihr Steam Deck mit jedem großen Cloud-Anbieter verbindet und Ihnen die Möglichkeit gibt, Dateien nach Bedarf oder nach Zeitplan in die Cloud zu übertragen.

## Wechsel in den Desktop-Modus

Die gesamte Installation und Konfiguration erfolgt im Desktop-Modus des Steam Deck. So wechseln Sie:

1. Drücken Sie die **Steam-Taste** auf Ihrem Deck.
2. Navigieren Sie zu **Power > Switch to Desktop**.
3. Das Deck startet neu in einen vollständigen KDE-Plasma-Desktop mit Taskleiste, Dateimanager (Dolphin) und Terminal (Konsole).

Der Desktop-Modus bietet Ihnen eine vollständige Linux-Desktopumgebung. Sie können den Touchscreen, die Trackpads oder eine über USB-C oder Bluetooth angeschlossene Tastatur und Maus für ein komfortableres Arbeiten verwenden.

## Installation von RcloneView auf dem Steam Deck

SteamOS verfügt standardmäßig über ein schreibgeschütztes Root-Dateisystem, was die traditionelle Paketinstallation einschränkt. Die beiden besten Ansätze zur Softwareinstallation sind Flatpak (die offiziell unterstützte Methode) und AppImage.

### Option 1: AppImage (Empfohlen)

Die AppImage-Methode ist am einfachsten und funktioniert ohne Änderungen am System:

1. Öffnen Sie den **Firefox**-Browser im Desktop-Modus (auf SteamOS vorinstalliert).
2. Navigieren Sie zu [rcloneview.com](https://rcloneview.com/src/download.html) und laden Sie das Linux-AppImage herunter.
3. Öffnen Sie **Dolphin** (den Dateimanager) und navigieren Sie zu Ihrem Downloads-Ordner.
4. Klicken Sie mit der rechten Maustaste auf die AppImage-Datei, wählen Sie **Properties > Permissions** und aktivieren Sie **Is Executable**.
5. Doppelklicken Sie, um sie auszuführen.

Alternativ von Konsole (dem Terminal):

```bash
chmod +x ~/Downloads/RcloneView-*.AppImage
~/Downloads/RcloneView-*.AppImage
```

Verschieben Sie das AppImage an einen dauerhaften Speicherort, um Ihren Downloads-Ordner sauber zu halten:

```bash
mkdir -p ~/Applications
mv ~/Downloads/RcloneView-*.AppImage ~/Applications/
```

Um RcloneView zu Ihrem Anwendungsmenü hinzuzufügen, erstellen Sie einen Desktop-Eintrag:

```bash
cat > ~/.local/share/applications/rcloneview.desktop << 'EOF'
[Desktop Entry]
Name=RcloneView
Exec=/home/deck/Applications/RcloneView-latest.AppImage
Icon=rcloneview
Type=Application
Categories=Utility;FileManager;
EOF
```

Ersetzen Sie den Dateinamen durch Ihren tatsächlichen AppImage-Dateinamen.

### Option 2: Deaktivieren des schreibgeschützten Dateisystems (Fortgeschritten)

Wenn Sie Pakete über pacman installieren möchten (wie bei einem regulären Arch-System), können Sie das schreibgeschützte Dateisystem deaktivieren:

```bash
sudo steamos-readonly disable
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -Syu rclone fuse3
```

**Warnung:** Das Deaktivieren des schreibgeschützten Dateisystems bedeutet, dass SteamOS-Updates Ihre Änderungen überschreiben können. Die AppImage-Methode ist über Systemupdates hinweg beständiger.

### Überprüfen der Installation

Starten Sie RcloneView. Sie sollten die Hauptoberfläche mit dem Remote-Explorer sehen. Wenn Sie den Touchscreen verwenden, ist die Oberfläche für die grundlegende Navigation ausreichend reaktionsfähig, für längere Dateiverwaltungssitzungen wird jedoch eine Maus empfohlen.

## Cloud-Speicherkonten verbinden

Sobald RcloneView im Desktop-Modus läuft, fügen Sie Ihre Cloud-Speicheranbieter hinzu.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. Klicken Sie auf **New Remote** und wählen Sie **Google Drive**.
2. Der OAuth-Ablauf öffnet sich in Firefox. Melden Sie sich mit Ihrem Google-Konto an und gewähren Sie den Zugriff.
3. Speichern Sie das Remote. Ihr gesamtes Google Drive ist nun von RcloneView aus zugänglich.

### OneDrive

1. Klicken Sie auf **New Remote** und wählen Sie **Microsoft OneDrive**.
2. Authentifizieren Sie sich über die Microsoft-Anmeldeseite in Firefox.
3. Wählen Sie privates OneDrive oder OneDrive for Business.
4. Speichern Sie das Remote.

### S3-kompatibler Speicher (Backblaze B2, Wasabi, AWS)

1. Klicken Sie auf **New Remote** und wählen Sie Ihren S3-Anbieter.
2. Geben Sie Ihren Access Key und Secret Key ein.
3. Geben Sie die Region und den Endpunkt an.
4. Speichern Sie das Remote.

Für Steam-Deck-Nutzer sind Google Drive und OneDrive die gängigsten Wahlmöglichkeiten, da viele Gamer bereits über diese Konten verfügen. S3-kompatible Anbieter wie Backblaze B2 oder Wasabi bieten kostengünstigen Massenspeicher für große Spielstand-Backup-Archive.

## Spielstände sichern

Dies ist der Hauptanwendungsfall für die meisten Steam-Deck-Nutzer. Spielstand-Dateien sind klein, aber unersetzlich. So sichern Sie sie mit RcloneView.

### Speicherstände finden

Steam-Spielstände auf dem Deck befinden sich üblicherweise in:

- **Steam-Proton-Spielstände:** `~/.local/share/Steam/steamapps/compatdata/[APPID]/pfx/drive_c/users/steamuser/`
- **Native Linux-Spielstände:** `~/.local/share/[GameName]/` oder `~/.config/[GameName]/`
- **Emulierte Spielstände:** hängen vom Emulator ab (RetroArch-Spielstände befinden sich normalerweise in `~/.config/retroarch/saves/`)

### Einen Spielstand-Backup-Job erstellen

1. Öffnen Sie in RcloneView Ihr lokales Dateisystem im linken Bereich und navigieren Sie zu Ihrem Spielstand-Ordner.
2. Öffnen Sie Ihr Cloud-Remote im rechten Bereich und erstellen Sie einen Zielordner (z. B. `SteamDeck/Saves/`).
3. Wählen Sie die Spielstand-Dateien oder -Ordner aus und kopieren Sie sie in die Cloud.

Für dauerhaften Schutz erstellen Sie einen Synchronisationsjob:

1. Legen Sie die Quelle auf Ihr lokales Spielstand-Verzeichnis fest.
2. Legen Sie das Ziel auf Ihren Cloud-Backup-Ordner fest.
3. Planen Sie den Job so, dass er täglich oder in der von Ihnen bevorzugten Häufigkeit ausgeführt wird.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

Auf diese Weise werden Ihre neuesten Spielstände jedes Mal, wenn Sie eine Spielsitzung beenden und in den Desktop-Modus wechseln, automatisch in die Cloud übertragen (oder Sie können den Job manuell ausführen, bevor Sie in den Gaming-Modus zurückwechseln).

## Screenshots und Aufnahmen synchronisieren

Das Steam Deck speichert Screenshots in `~/.local/share/Steam/userdata/[USERID]/760/remote/[APPID]/screenshots/`. Gameplay-Aufnahmen (falls Sie Tools wie OBS im Desktop-Modus verwenden) können überall gespeichert werden, wo Sie sie konfigurieren.

### Screenshot-Synchronisation einrichten

1. Navigieren Sie in RcloneView im linken Bereich zu Ihrem Screenshots-Verzeichnis.
2. Öffnen Sie im rechten Bereich einen Cloud-Zielordner (z. B. `SteamDeck/Screenshots/`).
3. Erstellen Sie einen Synchronisationsjob, um neue Screenshots in die Cloud zu übertragen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

Screenshots sind in der Regel klein (jeweils 1-5 MB), sodass Synchronisationsjobs auch bei einer bescheidenen Internetverbindung schnell abgeschlossen sind. Für Gameplay-Aufnahmen, die jeweils mehrere hundert Megabyte oder mehrere Gigabyte groß sein können, sollten Sie Uploads für Zeiten planen, in denen das Deck angedockt und mit WLAN verbunden ist.

### Speicherplatz nach dem Upload freigeben

Sobald Screenshots und Aufnahmen sicher in der Cloud sind, können Sie die lokalen Kopien löschen, um SSD-Speicherplatz zurückzugewinnen. Die Verschiebungsfunktion von RcloneView (im Gegensatz zum Kopieren) überträgt Dateien und entfernt die Quelle in einem einzigen Schritt. Gehen Sie hierbei vorsichtig vor – überprüfen Sie, dass die Cloud-Kopie existiert, bevor Sie lokale Dateien löschen.

## Speicherverwaltung auf der begrenzten SSD

Über die Sicherung von Spielständen und Medien hinaus hilft RcloneView bei der umfassenderen Speicherverwaltung auf dem Steam Deck:

- **Alte Spieldaten archivieren** – Ein Spiel beendet und möchten die Spielstände behalten, aber den Speicherplatz zurückgewinnen? Synchronisieren Sie die Spielstanddaten mit der Cloud und deinstallieren Sie dann das Spiel. Wenn Sie es später erneut installieren, stellen Sie die Spielstände aus der Cloud wieder her.
- **Mod-Dateien auslagern** – große Mod-Pakete (Texture-Overhauls, Total Conversions) können in Cloud-Speicher gesichert und bei Bedarf erneut heruntergeladen werden.
- **Cloud-Speicher für Medien einbinden** – binden Sie einen Google-Drive- oder OneDrive-Ordner als lokales Verzeichnis ein und streamen Sie Medien (Musik, Videos) aus der Cloud, ohne sie auf der SSD zu speichern.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

### Cloud-Speicher auf dem Steam Deck einbinden

So binden Sie ein Cloud-Remote als lokales Dateisystem ein:

1. Stellen Sie sicher, dass FUSE verfügbar ist. Auf dem Standard-SteamOS ist die FUSE-Unterstützung normalerweise bereits enthalten. Falls nicht:

```bash
sudo steamos-readonly disable
sudo pacman -S fuse3
sudo steamos-readonly enable
```

2. Klicken Sie in RcloneView mit der rechten Maustaste auf ein Remote und wählen Sie **Mount**, oder verwenden Sie den Mount Manager.
3. Wählen Sie einen Einbindungspunkt (z. B. `~/CloudDrive/`).
4. Konfigurieren Sie die Cache-Einstellungen – verwenden Sie für das beste Erlebnis mit Mediendateien den VFS-Cache-Modus „full“.

Das eingebundene Laufwerk erscheint in Dolphin und ist für jede Anwendung zugänglich. Sie könnten beispielsweise einen Mediaplayer auf einen eingebundenen Cloud-Ordner verweisen, um Ihre Musikbibliothek zu streamen, ohne SSD-Speicherplatz zu belegen.

## Praktische Workflows für Steam-Deck-Nutzer

### Vor einer Reise

1. Wechseln Sie in den Desktop-Modus.
2. Führen Sie Ihren Spielstand-Backup-Job aus, um die neuesten Spielstände in die Cloud zu übertragen.
3. Überprüfen Sie in der Jobhistorie von RcloneView, ob das Backup abgeschlossen wurde.
4. Wechseln Sie zurück in den Gaming-Modus.

### Nach einer Spielsitzung

1. Wechseln Sie in den Desktop-Modus.
2. Führen Sie die Screenshot-Synchronisation aus, um neue Aufnahmen in die Cloud zu übertragen.
3. Löschen Sie optional lokale Screenshots, um Speicherplatz freizugeben.
4. Wechseln Sie zurück in den Gaming-Modus.

### Nach einem SteamOS-Update oder Werksreset

1. Wechseln Sie in den Desktop-Modus.
2. Installieren Sie RcloneView erneut (die AppImage-Methode dauert nur Sekunden).
3. Konfigurieren Sie Ihre Cloud-Remotes neu (oder stellen Sie die rclone-Konfigurationsdatei wieder her, falls Sie sie in der Cloud gesichert haben).
4. Holen Sie Ihre Spielstand-Dateien aus der Cloud zurück.
5. Setzen Sie das Spielen fort.

Um die Wiederherstellung zu beschleunigen, sichern Sie auch Ihre rclone-Konfigurationsdatei (`~/.config/rclone/rclone.conf`) in der Cloud. Diese Datei enthält Ihre Remote-Definitionen und kann wiederhergestellt werden, um alle Ihre Cloud-Konten sofort neu zu verbinden.

## Erste Schritte

1. **Wechseln Sie in den Desktop-Modus** auf Ihrem Steam Deck.
2. **Laden Sie das RcloneView-AppImage herunter** und machen Sie es ausführbar.
3. **Fügen Sie Ihre Cloud-Konten hinzu** – Google Drive, OneDrive oder S3 sind die gängigsten Wahlmöglichkeiten.
4. **Sichern Sie Ihre Spielstände**, indem Sie einen Synchronisationsjob von Ihren Spielstand-Verzeichnissen zu einem Cloud-Ordner erstellen.
5. **Synchronisieren Sie Ihre Screenshots**, um SSD-Speicherplatz freizugeben und Ihre Aufnahmen sicher aufzubewahren.
6. **Planen Sie regelmäßige Backups**, damit Ihre Daten stets geschützt sind, selbst wenn Sie vergessen, eine manuelle Synchronisation auszuführen.

Ihr Steam Deck ist ein tragbares Gaming-Kraftpaket, doch sein Speicherplatz ist begrenzt. RcloneView verwandelt jedes Cloud-Konto in eine Erweiterung des Dateisystems Ihres Decks – so bleiben Spielstände sicher, Screenshots organisiert und Ihre SSD frei für das nächste Spiel.

---

**Weiterführende Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Jobs ausführen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
