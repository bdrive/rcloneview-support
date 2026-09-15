---
slug: rcloneview-kali-linux-cloud-sync
title: "RcloneView auf Kali Linux — Cloud-Speicher-Synchronisation und Backup"
authors:
  - jay
description: "Installieren Sie RcloneView auf Kali Linux, um 90+ Cloud-Anbieter über einen sicheren, auditierbaren GUI-Workflow zu mounten, zu synchronisieren und zu sichern."
keywords:
  - RcloneView Kali Linux
  - cloud storage Kali Linux
  - install RcloneView Debian
  - cloud sync penetration testing
  - mount cloud drive Kali
  - rclone GUI Kali Linux
  - backup forensic evidence cloud
  - cloud backup security professionals
  - Kali Linux cloud storage GUI
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf Kali Linux — Cloud-Speicher-Synchronisation und Backup

> Bringen Sie einen grafischen Multi-Cloud-Dateimanager auf Kali Linux zum Laufen, um Engagement-Daten, forensische Images und Kundendeliverables zu synchronisieren, ohne die CLI zu berühren.

Kali Linux ist eine auf Debian basierende Distribution für Penetrationstests und digitale Forensik, und Sicherheitsteams, die mit Kali arbeiten, müssen häufig große Beweisdatensätze, Paketmitschnitte oder Kundenberichte zwischen lokalem Speicher und Cloud-Konten verschieben. RcloneView bringt einen grafischen Dateimanager in diesen Workflow und erlaubt es, Cloud-Speicher vom selben Desktop aus zu durchsuchen, zu synchronisieren und zu mounten, auf dem auch Ihre anderen Tools laufen. Da Kali einen vollständigen Xfce-Desktop mit X11 mitbringt, erfüllt es die Anzeigeanforderungen, die RcloneView zum Ausführen benötigt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView auf Kali Linux installieren

Da Kali auf Debian basiert, installiert sich das offizielle `.deb`-Paket von [rcloneview.com](https://rcloneview.com/src/download.html) genauso wie unter Debian oder Ubuntu — laden Sie die Datei `rclone_view-{version}-linux-{arch}.deb` herunter und installieren Sie sie mit `dpkg -i`; fehlende Abhängigkeiten lösen Sie mit `apt --fix-broken install`. Kali stellt `x86_64`-Builds direkt bereit, und das `.AppImage`-Format ist eine gute Alternative, wenn Sie kein systemweit installiertes Paket möchten, da es ohne Installation direkt ausgeführt wird.

RcloneView ist eine auf Flutter basierende GUI-Anwendung und kein Kommandozeilenwerkzeug, daher benötigt es die grafische Xfce/X11-Sitzung, die Kali standardmäßig ausführt — ohne X11-Forwarding oder eine Remote-Desktop-Sitzung startet es bei einer Headless-SSH-Verbindung nicht. Außerdem hängt es für sein System-Tray-Symbol von GTK+3 und einer AppIndicator-Bibliothek ab, die beide in einer Standard-Kali-Desktop-Installation vorhanden sind.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

## Cloud-Speicher für Engagement-Daten verbinden

Nach der Installation fügen Sie Remotes über den New-Remote-Assistenten im Remote-Tab hinzu. Amazon S3, Cloudflare R2 und Backblaze B2 eignen sich mit Access-Key- und Secret-Anmeldedateneingabe gut für die Speicherung großer forensischer Disk-Images und Paketmitschnitte, während Google Drive, OneDrive oder Box die kundenseitige Berichtszustellung per OAuth-Browser-Login übernehmen. RcloneViews Synchronisation und Folder Compare stehen bereits mit der FREE-Lizenz zur Verfügung, sodass Sie erfasste Beweise in den Cloud-Speicher übertragen und ohne Upgrade verifizieren können, dass sie unbeschädigt angekommen sind.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between cloud remotes in RcloneView on Kali" class="img-large img-center" />

## Beweissicherungs-Backups synchronisieren und verifizieren

Für Chain-of-Custody-Workflows führen Sie vor jedem Sync-Job einen Dry Run aus, um genau zu sehen, welche Dateien kopiert oder gelöscht werden, und verifizieren anschließend mit Folder Compare, dass Quelle und Ziel übereinstimmen. Die Vergleichsansicht markiert Dateien nach Größenunterschied und zeigt identische Dateien nebeneinander an, was nützlich ist, wenn Sie bestätigen müssen, dass ein forensisches Image ohne Beschädigung übertragen wurde. Aktivieren Sie den Prüfsummenvergleich im Advanced-Settings-Schritt des Sync-Jobs für eine stärkere Integritätsprüfung als eine reine Größenprüfung.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder compare results view in RcloneView" class="img-large img-center" />

## Cloud-Speicher während eines Einsatzes mounten

Sie können ein Cloud-Remote über den Mount Manager auch als lokales Laufwerk mounten, was unter Linux auf FUSE und die `nfsmount`-Methode setzt — stellen Sie sicher, dass `fuse3` installiert ist. So können Sie in der Cloud gehostete Falldateien direkt in Ihren anderen Kali-Tools öffnen, ohne sie vorher manuell herunterzuladen, mit der Option, schreibgeschützt zu mounten, um versehentliche Schreibzugriffe auf gemeinsam genutzte Beweise zu verhindern.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote from the Mount Manager in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter — holen Sie sich den `.deb`- oder `.AppImage`-Build für `x86_64`.
2. Installieren Sie mit `dpkg -i` (oder machen Sie das AppImage ausführbar und starten Sie es direkt).
3. Fügen Sie Ihre Cloud-Remotes über den New-Remote-Assistenten hinzu, je nach Anbieter per OAuth-Login oder Anmeldedateneingabe.
4. Führen Sie einen Dry Run aus, dann einen echten Sync-Job, und verifizieren Sie die Ergebnisse mit Folder Compare.

Beweise und Kundendeliverables über lokale Datenträger und Cloud-Speicher hinweg zu organisieren, wird mit einer GUI, die Sie vor jeder Übertragung visuell prüfen können, deutlich weniger fehleranfällig.

---

**Verwandte Anleitungen:**

- [RcloneView auf Ubuntu / Debian Linux installieren](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView auf Debian Linux — Cloud-Speicher-Synchronisation und Backup](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Cloud-Speicher für Cybersicherheitsunternehmen mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-cybersecurity-companies-rcloneview)

<CloudSupportGrid />
