---
slug: rcloneview-manjaro-linux-cloud-sync
title: "RcloneView unter Manjaro Linux installieren und für Cloud-Synchronisation nutzen"
authors:
  - tayson
description: "Manjaro Linux bringt die Power von Arch mit benutzerfreundlichen Standardeinstellungen. Erfahren Sie, wie Sie RcloneView unter Manjaro über pamac, pacman oder AppImage installieren, für nahtlose Multi-Cloud-Dateisynchronisation, Einbindung und Backup."
keywords:
  - rcloneview manjaro linux
  - manjaro cloud sync
  - install rcloneview manjaro
  - manjaro rclone gui
  - arch linux cloud storage
  - manjaro pamac rcloneview
  - manjaro cloud backup
  - manjaro mount cloud drive
  - rcloneview appimage manjaro
  - manjaro aur rcloneview
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView unter Manjaro Linux installieren und für Cloud-Synchronisation nutzen

> Manjaro nimmt die Rolling-Release-Power von Arch Linux und verpackt sie in ein desktopfreundliches Paket. Mit RcloneView erhalten Sie einen visuellen Multi-Cloud-Dateimanager, der sich nahtlos in Manjaros Philosophie einfügt, leistungsstarke Werkzeuge zugänglich zu machen.

Manjaro Linux hat sich zu einer der beliebtesten Arch-basierten Distributionen entwickelt und bietet das Rolling-Release-Modell sowie Zugriff auf das AUR (Arch User Repository), während es gleichzeitig eine zugänglichere Installations- und Konfigurationserfahrung bietet. Egal ob Sie Manjaro mit XFCE, KDE Plasma oder GNOME betreiben, Sie erhalten Zugriff auf die neuesten Softwarepakete und eine Community, die Wahlfreiheit und Kontrolle schätzt. RcloneView ergänzt dies, indem es Manjaro-Nutzern eine grafische Oberfläche zur Verwaltung von Dateien über mehr als 70 Cloud-Speicher-Anbieter hinweg bietet — Google Drive, OneDrive, Dropbox, AWS S3, Backblaze B2, Wasabi und viele weitere. Diese Anleitung führt Sie durch die Installation, die Einrichtung von Cloud-Remotes, die Dateisynchronisation, das Einbinden von Laufwerken und die Zeitplanung von Aufgaben unter Manjaro.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Manjaro für die Verwaltung von Cloud-Dateien

Manjaro bietet mehrere Vorteile als Plattform für den Betrieb von RcloneView:

- **Rolling Releases** — Sie haben immer Zugriff auf die neuesten Versionen von rclone und Systembibliotheken, ohne auf einen Distributions-Upgrade-Zyklus warten zu müssen.
- **AUR-Zugriff** — das Arch User Repository bietet von der Community gepflegte Pakete, die in den offiziellen Repositories nicht verfügbar sind, und erweitert damit Ihre Installationsmöglichkeiten.
- **Hardware-Erkennung** — Manjaros mhwd-Tool konfiguriert Treiber automatisch, was für GPU-beschleunigte Desktop-Umgebungen wichtig ist, in denen eine reibungslose GUI-Erfahrung von der richtigen Treibereinrichtung abhängt.
- **Mehrere Desktop-Umgebungen** — ob Sie KDE Plasma, XFCE, GNOME oder einen Tiling-Window-Manager bevorzugen, RcloneView läuft auf allen dank standardmäßiger GTK/Qt-Kompatibilität.
- **Aktive Community** — Manjaros Foren und Wiki bieten Fehlerbehebungsressourcen speziell für die Konfigurationseigenheiten der Distribution.

## Voraussetzungen

Bevor Sie RcloneView unter Manjaro installieren, stellen Sie sicher, dass Sie Folgendes haben:

- Manjaro Linux (jede Edition — XFCE, KDE, GNOME oder Community-Editionen)
- Eine funktionierende Internetverbindung
- Mindestens 512 MB freien Festplattenspeicher
- Ein Konto bei einem oder mehreren Cloud-Speicher-Anbietern (Google Drive, OneDrive, S3 usw.)
- Grundlegende Vertrautheit mit dem Terminal (obwohl die meisten Vorgänge in der GUI stattfinden)

Aktualisieren Sie zunächst Ihr System, um sicherzustellen, dass alle Pakete aktuell sind:

```bash
sudo pacman -Syu
```

Oder mit Manjaros grafischem Paketmanager, pamac:

```bash
pamac update
```

## RcloneView unter Manjaro installieren

Manjaro bietet Ihnen mehrere Wege, RcloneView zu installieren. Wählen Sie den, der am besten zu Ihrem Workflow passt.

### Option 1: AppImage (für die meisten Nutzer empfohlen)

Die AppImage ist die einfachste Installationsmethode. Sie bündelt alles, was RcloneView benötigt, in einer einzigen ausführbaren Datei — keine Abhängigkeitsverwaltung erforderlich.

1. Laden Sie die neueste RcloneView-AppImage von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Machen Sie sie ausführbar:

```bash
chmod +x RcloneView-*.AppImage
```

3. Führen Sie sie aus:

```bash
./RcloneView-*.AppImage
```

Um die AppImage in Ihr Anwendungsmenü zu integrieren, verwenden Sie ein Tool wie AppImageLauncher, das in den Manjaro-Repositories verfügbar ist:

```bash
sudo pacman -S appimagelauncher
```

Nach der Installation werden Sie beim Doppelklick auf die AppImage aufgefordert, sie in Ihre Desktop-Umgebung zu integrieren.

### Option 2: Installation über pamac (AUR)

Manjaros pamac-Paketmanager kann AUR-Pakete direkt installieren. Stellen Sie zunächst sicher, dass die AUR-Unterstützung in pamac aktiviert ist:

1. Öffnen Sie **Add/Remove Software** (pamac GUI).
2. Gehen Sie zu **Preferences > Third Party** und aktivieren Sie die AUR-Unterstützung.
3. Suchen Sie nach `rcloneview` und installieren Sie es.

Oder über das Terminal:

```bash
pamac build rcloneview
```

pamac übernimmt die Abhängigkeitsauflösung automatisch und zieht alle benötigten Bibliotheken nach.

### Option 3: rclone separat installieren und die AppImage verwenden

Wenn Sie die neueste rclone-Version über pacman verwalten möchten, während Sie die AppImage für die GUI nutzen:

```bash
sudo pacman -S rclone fuse3
```

Laden Sie dann die RcloneView-AppImage herunter und führen Sie sie aus. RcloneView erkennt das systemweit installierte rclone und verwendet es.

### Überprüfung der Installation

Starten Sie nach der Installation RcloneView über Ihr Anwendungsmenü oder das Terminal. Sie sollten das Hauptfenster mit dem Remote-Explorer und den Panels zur Aufgabenverwaltung sehen. Wenn Sie rclone separat installiert haben, überprüfen Sie, ob es erkannt wird:

```bash
rclone version
```

## Cloud-Remotes hinzufügen

Sobald RcloneView läuft, besteht der erste Schritt darin, Ihre Cloud-Speicher-Konten zu verbinden. RcloneView bietet eine geführte Einrichtung für jeden Anbieter.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. Klicken Sie in der RcloneView-Oberfläche auf **New Remote**.
2. Wählen Sie **Google Drive** aus der Anbieterliste.
3. Folgen Sie dem OAuth-Authentifizierungsablauf — ein Browserfenster öffnet sich, damit Sie sich anmelden und Zugriff gewähren können.
4. Wählen Sie Ihren Zugriffsbereich (vollständiger Laufwerkszugriff, dateibasierter Zugriff oder Nur-Lese-Zugriff).
5. Speichern Sie den Remote.

### OneDrive

1. Klicken Sie auf **New Remote** und wählen Sie **Microsoft OneDrive**.
2. Authentifizieren Sie sich über den Microsoft-OAuth-Ablauf in Ihrem Browser.
3. Wählen Sie zwischen persönlichem OneDrive, OneDrive for Business oder SharePoint.
4. Speichern Sie den Remote.

### S3-kompatibler Speicher (AWS, Wasabi, Backblaze B2, MinIO)

1. Klicken Sie auf **New Remote** und wählen Sie Ihren S3-kompatiblen Anbieter.
2. Geben Sie Ihre Access Key ID und Ihren Secret Access Key ein.
3. Geben Sie die Region und den Endpunkt an (bei Nicht-AWS-Anbietern wie Wasabi oder MinIO ist die Endpunkt-URL erforderlich).
4. Speichern Sie den Remote.

Sie können so viele Remotes hinzufügen, wie Sie benötigen. Alle konfigurierten Remotes erscheinen in der Seitenleiste für schnellen Zugriff.

## Dateien durchsuchen und synchronisieren

Sobald Ihre Remotes konfiguriert sind, lässt Sie der zweigeteilte Explorer von RcloneView lokale und Cloud-Dateien nebeneinander durchsuchen. Sie können Ordnerstrukturen navigieren, Dateidetails in der Vorschau anzeigen und Übertragungen per Drag-and-Drop oder über die Symbolleiste starten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### Dateien kopieren

Wählen Sie Dateien oder Ordner in einem Bereich aus und kopieren Sie sie an den Speicherort des anderen Bereichs. Dies funktioniert für:

- **Lokal zu Cloud** — Laden Sie Dateien von Ihrem Manjaro-Dateisystem in einen verbundenen Cloud-Remote hoch.
- **Cloud zu lokal** — Laden Sie Dateien aus dem Cloud-Speicher auf Ihre lokale Festplatte herunter.
- **Cloud zu Cloud** — Übertragen Sie Dateien direkt zwischen zwei Cloud-Anbietern, ohne sie zuvor auf Ihren lokalen Rechner herunterzuladen.

### Ordner synchronisieren

Für eine fortlaufende Synchronisation erstellen Sie eine Sync-Aufgabe, die zwei Speicherorte synchron hält:

1. Öffnen Sie den Quellordner im linken Bereich und das Ziel im rechten Bereich.
2. Klicken Sie auf **Sync** und konfigurieren Sie die Synchronisationsrichtung (einseitig oder Spiegelung).
3. Überprüfen Sie den Vergleich, um zu sehen, welche Dateien hinzugefügt, aktualisiert oder gelöscht werden.
4. Führen Sie die Synchronisation aus.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## Cloud-Speicher als lokales Laufwerk einbinden

RcloneView kann jeden Cloud-Remote als lokales Dateisystemverzeichnis unter Manjaro einbinden. Dadurch können Sie über Ihren Dateimanager (Thunar, Dolphin, Nautilus) oder jede beliebige Anwendung auf Cloud-Dateien zugreifen, als befänden sie sich auf einem lokalen Laufwerk.

### Einrichtung einer Einbindung

1. Stellen Sie sicher, dass FUSE installiert ist:

```bash
sudo pacman -S fuse3
```

2. Klicken Sie in RcloneView mit der rechten Maustaste auf einen Remote oder navigieren Sie zum Mount Manager.
3. Wählen Sie einen lokalen Einbindungspunkt (z. B. `~/CloudDrive/GoogleDrive`).
4. Konfigurieren Sie die Einbindungsoptionen — Cache-Einstellungen, Nur-Lese- oder Lese-Schreib-Zugriff, VFS-Cache-Modus.
5. Klicken Sie auf **Mount**.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

Das eingebundene Laufwerk erscheint in Ihrem Dateimanager und ist für alle Anwendungen zugänglich. Sie könnten beispielsweise einen Media-Player auf einen eingebundenen Google-Drive-Ordner richten oder CAD-Dateien direkt von einem eingebundenen S3-Bucket öffnen.

### Tipps zur Einbindungsleistung unter Manjaro

- **Verwenden Sie den VFS-Cache-Modus „full"** für die beste Leistung bei Anwendungen mit zufälligen Lesezugriffen (Dokumenteneditoren, Media-Player).
- **Legen Sie ein Cache-Verzeichnis auf schnellem Speicher an** — wenn Sie eine NVMe-SSD haben, richten Sie den VFS-Cache dort für schnelleren Zugriff ein.
- **Erhöhen Sie die Verzeichnis-Cache-Zeit** für Remotes mit großen Ordnerstrukturen, um API-Aufrufe zu reduzieren.

## Automatisierte Sync-Aufgaben zeitplanen

Für fortlaufendes Backup und Synchronisation lässt Sie der Aufgabenplaner von RcloneView wiederkehrende Sync-Vorgänge definieren, die automatisch ausgeführt werden.

1. Erstellen Sie eine Sync-Aufgabe, indem Sie Quell- und Ziel-Remotes sowie Ordner auswählen.
2. Öffnen Sie den Aufgabenplaner und legen Sie die Häufigkeit fest — stündlich, täglich, wöchentlich oder einen benutzerdefinierten Cron-Ausdruck.
3. Aktivieren Sie den Zeitplan und lassen Sie RcloneView den Rest erledigen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

Übliche Zeitplanmuster für Manjaro-Nutzer:

- **Tägliches Backup von ~/Documents zu Google Drive** — läuft jeden Abend, um Ihre Dokumente in der Cloud gespiegelt zu halten.
- **Wöchentliche Synchronisation eines Projektordners zu S3** — hält ein Off-Site-Backup großer Projektdateien vor.
- **Stündliche Synchronisation eines gemeinsam genutzten Team-Ordners** über mehrere Cloud-Anbieter hinweg zur Redundanz.

## Fehlerbehebung bei Manjaro-spezifischen Problemen

### FUSE-Berechtigungen

Wenn die Einbindung mit einem Berechtigungsfehler fehlschlägt, stellen Sie sicher, dass Ihr Benutzer in der Gruppe `fuse` ist:

```bash
sudo usermod -aG fuse $USER
```

Melden Sie sich ab und wieder an, damit die Gruppenänderung wirksam wird.

### Laden von Kernel-Modulen

Auf manchen Manjaro-Installationen lädt das FUSE-Kernel-Modul möglicherweise nicht automatisch. Laden Sie es manuell:

```bash
sudo modprobe fuse
```

Um dies dauerhaft zu machen, fügen Sie `fuse` zu `/etc/modules-load.d/fuse.conf` hinzu.

### Schriftdarstellung in der AppImage

Wenn Schriften in der AppImage-Version falsch aussehen, installieren Sie die notwendigen Schriftpakete:

```bash
sudo pacman -S noto-fonts ttf-liberation
```

### OAuth-Browser-Authentifizierung

Wenn sich das OAuth-Browserfenster während der Remote-Einrichtung nicht automatisch öffnet, überprüfen Sie, ob `xdg-open` korrekt konfiguriert ist:

```bash
xdg-settings get default-web-browser
```

Wenn kein Standardbrowser festgelegt ist, konfigurieren Sie einen über die Einstellungen Ihrer Desktop-Umgebung.

## Erste Schritte

1. **Manjaro aktualisieren** — führen Sie `sudo pacman -Syu` aus, um sicherzustellen, dass Ihr System aktuell ist.
2. **RcloneView installieren** — verwenden Sie die AppImage für Einfachheit oder pamac für AUR-Integration.
3. **Fügen Sie Ihre Cloud-Remotes hinzu** — verbinden Sie Google Drive, OneDrive, S3 oder jeden anderen Anbieter.
4. **Durchsuchen, kopieren und synchronisieren** Sie Dateien mit dem zweigeteilten Explorer.
5. **Binden Sie Cloud-Speicher** als lokales Laufwerk ein für nahtlosen Zugriff aus jeder Anwendung.
6. **Planen Sie automatisierte Backups**, um Ihre Daten ohne manuellen Aufwand zu schützen.

Manjaro bietet Ihnen einen leistungsstarken, stets aktuellen Linux-Desktop. RcloneView bietet Ihnen einen leistungsstarken, stets aktuellen Cloud-Dateimanager. Zusammen decken sie das gesamte Spektrum von lokalen Dateien bis hin zu Multi-Cloud-Speicher ab, ohne dass ein einziger Kommandozeilenbefehl erforderlich ist.

---

**Weiterführende Anleitungen:**

- [Remote-Speicher hinzufügen (Google-Drive-Beispiel)](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Zeitplanung und Ausführung von Aufgaben](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
