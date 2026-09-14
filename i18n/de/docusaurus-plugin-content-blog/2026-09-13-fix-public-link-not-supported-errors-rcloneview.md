---
slug: fix-public-link-not-supported-errors-rcloneview
title: "Fehler ‚Öffentlicher Link nicht unterstützt' beheben — Dateien mit RcloneView korrekt freigeben"
authors:
  - tayson
description: "Beheben Sie Get-Public-Link-Fehler in RcloneView, erfahren Sie, welche Remotes freigebbare Links unterstützen, und nutzen Sie sichere Workarounds für den Rest."
keywords:
  - RcloneView
  - Fehler bei öffentlichem Link
  - öffentlicher Link nicht unterstützt
  - Cloud-Dateien freigeben
  - rclone öffentlicher Link
  - Cloud-Speicher-Freigabe
  - Freigabelink-Fehler beheben
  - Fehlerbehebung Cloud-Dateifreigabe
  - Remote Manager
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Fehler „Öffentlicher Link nicht unterstützt" beheben — Dateien mit RcloneView korrekt freigeben

> Sie klicken mit rechts auf Get Public Link und nichts passiert — hier erfahren Sie, warum, und was Sie stattdessen tun können.

Das Explorer-Panel von RcloneView bietet im Rechtsklick-Menü den Befehl **Get Public Link**, der jedoch nur bei Remotes funktioniert, deren Backend eine native Freigabe-API bereitstellt. Versucht man es bei einer reinen Protokollverbindung oder einem nicht unterstützten Anbieter, schlägt die Anfrage fehl oder liefert einen Fehler statt einer URL. Der Remote Manager und der zweigeteilte Explorer von RcloneView machen es einfach, zu erkennen, auf welchem Remote man sich befindet, und die Datei stattdessen an einen linkfähigen Ort zu verschieben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Get Public Link bei manchen Remotes fehlschlägt

Die Erstellung öffentlicher Links hängt davon ab, was das zugrunde liegende Speicher-Backend unterstützt. Anbieter mit einer nativen Freigabe-API — darunter Google Drive, Dropbox, Microsoft OneDrive, Box und pCloud — liefern eine freigebbare URL, weil rclone den Link-Endpunkt des jeweiligen Anbieters aufruft. Protokollbasierte Verbindungen wie SFTP, FTP, WebDAV und SMB/CIFS kennen dieses Konzept gar nicht — es sind reine Dateiübertragungsprotokolle, keine Freigabeplattformen, sodass es nichts gibt, was der Befehl aufrufen könnte. S3-kompatible Endpunkte (Amazon S3, Wasabi, Backblaze B2, Cloudflare R2) regeln den öffentlichen Zugriff stattdessen über Bucket-Richtlinien oder vorab signierte URLs, die in der Konsole des jeweiligen Anbieters eingerichtet werden.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote screen showing different provider types" class="img-large img-center" />

Bevor Sie von einem Fehler ausgehen, prüfen Sie, in welche Kategorie Ihr Remote fällt. Öffnen Sie den Remote Manager über den Reiter Remote und bestätigen Sie den Remote-Typ — oft erklärt ein kurzer Blick den Fehlschlag sofort.

## Remote und Berechtigungseinstellungen prüfen

Handelt es sich um einen OAuth-basierten Anbieter, der Linking eigentlich unterstützen sollte, besteht der nächste Schritt darin, zu prüfen, ob das Konto die Berechtigung hat, die betreffende Datei oder den Ordner freizugeben. Business- und Enterprise-Varianten dieser Remotes schränken die externe Freigabe manchmal auf Organisationsebene ein, was sich in RcloneView als derselbe fehlgeschlagene Request zeigt. Authentifizieren Sie das Remote über den Remote Manager erneut, falls das Token veraltet wirkt, und versuchen Sie es zunächst mit einer Datei, von der Sie über die eigene Weboberfläche des Anbieters wissen, dass sie freigebbar ist.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder compare view for verifying file locations before sharing" class="img-large img-center" />

Anders als reine Mount-Tools bietet RcloneView auch Synchronisation und Ordnervergleich — bereits mit der FREE-Lizenz —, sodass Sie eine Datei schnell von einem nicht linkfähigen Remote auf ein freigabefähiges kopieren können, statt weiter Fehler zu suchen.

## Sichere Workarounds, wenn ein Remote keine Link-Unterstützung bietet

Bei SFTP, FTP, WebDAV, SMB und den meisten S3-kompatiblen Buckets besteht die praktische Lösung darin, die Datei auf ein Remote zu kopieren, das native Links unterstützt, oder die Verteilung über die eigene Konsole des Anbieters abzuwickeln (Bucket-Richtlinie, vorab signierte URL oder NAS-seitige Freigabe). Verschieben Sie eine Kopie per Drag-and-Drop zwischen zwei geöffneten Explorer-Panels von RcloneView und führen Sie Get Public Link dann auf dem Ziel-Remote aus.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling for repeatable copy-and-share workflows" class="img-large img-center" />

Bei wiederkehrendem Bedarf speichern Sie diesen Kopierschritt als Job im Job Manager, sodass dieselben Dateien nach jeder Synchronisation automatisch auf Ihrem linkfähigen Remote landen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Remote Manager, um zu bestätigen, welchen Backend-Typ das betroffene Remote tatsächlich verwendet.
3. Authentifizieren Sie OAuth-Remotes erneut, deren Token möglicherweise abgelaufen sind, und versuchen Sie den Link dann bei einer bekanntermaßen freigebbaren Datei erneut.
4. Kopieren Sie bei Protokoll- oder S3-kompatiblen Remotes die Datei per Drag-and-Drop auf ein linkfähiges Remote und erzeugen Sie den Link dort.

Zu wissen, welche Remotes Links freigeben können, bevor man einen braucht, erspart später ein Support-Ticket.

---

**Verwandte Anleitungen:**

- [Freigebbare öffentliche Links für Cloud-Dateien mit RcloneView erhalten](https://rcloneview.com/support/blog/link-public-shared-links-cloud-rcloneview)
- [Google-Drive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Fehler „Zugriff verweigert" bei Cloud-Übertragungen mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-transfer-permission-denied-errors-rcloneview)

<CloudSupportGrid />
