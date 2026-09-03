---
slug: cache-remote-accelerate-slow-storage-rcloneview
title: "Cache Remote — Langsamen Cloud-Speicher in RcloneView beschleunigen"
authors:
  - robin
description: "Erfahren Sie, wie der Cache-Virtual-Remote von RcloneView langsame Cloud-Backends beschleunigt, indem er Verzeichnislisten und Dateidaten zwischenspeichert — inklusive Plex-Integration."
keywords:
  - rclone cache remote
  - rcloneview cache remote einrichten
  - langsamen cloud-speicher beschleunigen
  - rclone cache plex integration
  - cloud-dateibrowsing beschleunigen
  - cache virtual remote rclone
  - rcloneview virtual remotes
  - langsamer cloud-speicher lösung
  - plex media server cloud cache
  - rclone verzeichnis-cache
tags:
  - RcloneView
  - feature
  - performance
  - plex
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cache Remote — Langsamen Cloud-Speicher in RcloneView beschleunigen

> Manche Cloud-Backends sind beim Auflisten und erneuten Auflisten bei jedem Durchsuchen langsam — der Cache-Virtual-Remote behebt das, indem er sich merkt, was bereits abgerufen wurde.

Nicht jeder Speicheranbieter reagiert schnell. Backends mit strengen API-Ratenlimits oder hoher Latenz pro Anfrage können das Durchsuchen träge wirken lassen, besonders bei großen Ordnerstrukturen oder wenn ein Medienserver wie Plex wiederholt dieselbe Bibliothek scannt. RcloneView stellt den Cache-Virtual-Remote von rclone direkt im New-Remote-Assistenten bereit, sodass Sie einen langsamen Remote in eine Cache-Schicht einwickeln können, ohne eine Konfigurationsdatei manuell anzufassen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was der Cache Remote macht

Der Cache Remote ist ein Wrapper, kein eigenständiger Speichertyp — er liegt zwischen RcloneView und einem bereits konfigurierten Remote und fängt Verzeichnislisten und Dateilesevorgänge ab, sodass wiederholte Anfragen das Backend nicht erneut erreichen. Beim ersten Durchsuchen eines Ordners ruft RcloneView die Daten wie gewohnt vom eingewickelten Remote ab; beim nächsten Mal liefert der Cache das Ergebnis lokal — besonders spürbar bei Remotes mit langsamer API-Antwortzeit oder aggressiven Ratenlimits.

Das unterscheidet sich vom eingebauten VFS-Cache-Modus einer Einbindung, der Daten nur für eine einzelne Mount-Sitzung zwischenspeichert. Der Cache-Virtual-Remote erstellt stattdessen einen eigenständigen, benannten Remote, den Sie direkt durchsuchen, einbinden oder synchronisieren können, und dessen zwischengespeicherter Zustand App-Neustarts übersteht. Der häufigste praktische Anwendungsfall ist die Kombination eines Cache Remote mit der Plex-Media-Server-Integration, da sonst ständiges Bibliotheks-Scannen eine stetige Flut redundanter API-Aufrufe gegen den zugrunde liegenden Cloud-Speicher erzeugen würde.

<img src="/support/images/en/blog/new-remote.png" alt="Erstellen eines Cache-Virtual-Remote, der einen vorhandenen Cloud-Speicher-Remote in RcloneView einwickelt" class="img-large img-center" />

## Einen Cache Remote in RcloneView einrichten

Öffnen Sie den Reiter Remote > New Remote und wählen Sie Cache aus den Virtual-Remote-Optionen. Sie werden aufgefordert, den zugrunde liegenden Remote auszuwählen, der eingewickelt werden soll — dieser muss bereits in RcloneView konfiguriert sein, egal ob es sich um einen Cloud-Anbieter, einen S3-kompatiblen Bucket oder eine protokollbasierte Verbindung wie SFTP oder WebDAV handelt. Geben Sie dem Cache Remote einen unterscheidbaren Namen, damit in Tab Bar und Remote Manager klar ist, dass Sie die zwischengespeicherte Version und nicht die rohe Verbindung durchsuchen.

Nach der Erstellung erscheint der Cache Remote im Remote Manager neben Ihren anderen Remotes und verhält sich wie jeder andere Eintrag beim Durchsuchen, Einbinden oder Synchronisieren. RcloneView bindet UND synchronisiert 90+ Anbieter aus einem einzigen Fenster, unter Windows, macOS und Linux, sodass ein auf einem langsamen Backend aufgebauter Cache Remote denselben Funktionsumfang wie eine native Verbindung erhält — führen Sie einen Dry Run gegen ihn aus, fügen Sie ihn dem Job Manager hinzu oder binden Sie ihn als lokales Laufwerk ein.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Einbinden eines Cache Remote aus der Symbolleiste des Remote-Explorer-Panels" class="img-large img-center" />

## Wann Caching wirklich hilft

Caching zahlt sich am meisten bei Remotes aus, bei denen Auflistungsvorgänge im Verhältnis zur Menge sich ändernder Daten teuer sind — große Foto- oder Videobibliotheken, die wiederholt von Plex gescannt werden, tiefe Ordnerstrukturen oder Anbieter mit konservativen Ratenlimits, die aufeinanderfolgende Anfragen drosseln. Weniger nützlich ist es bei Remotes, in die häufig geschrieben wird, da geänderte Dateien erst durch den Cache propagieren müssen, bevor andere Tools sie konsistent sehen.

Wenn Sie einen Cache Remote für Medien-Streaming einbinden, kombinieren Sie ihn mit dem eigenen VFS-Cache-Modus der Einbindung, gesetzt auf writes oder full — die beiden Cache-Schichten arbeiten auf unterschiedlichen Ebenen und ergänzen sich gegenseitig.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager zeigt einen laufenden Synchronisierungsjob gegen einen Cache Remote" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Konfigurieren Sie den langsamen Remote, den Sie beschleunigen möchten, falls noch nicht geschehen.
3. Öffnen Sie New Remote, wählen Sie Cache und wählen Sie diesen Remote als den einzuwickelnden aus.
4. Binden Sie den neuen Cache Remote ein oder durchsuchen Sie ihn und vergleichen Sie die Auflistungsgeschwindigkeit beim zweiten Besuch desselben Ordners.

Ein Cache Remote macht Ihre Internetverbindung nicht schneller, aber bei sich wiederholenden Durchsuchmustern — besonders Scans von Medienbibliotheken — verwandelt er ein langsames Backend nach dem ersten Durchlauf in eines, das sich sofort reagierend anfühlt.

---

**Weiterführende Anleitungen:**

- [Virtual Remotes in RcloneView — Combine, Union und Alias erklärt](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Plex-Cloud-Streaming mit RcloneView](https://rcloneview.com/support/blog/plex-cloud-mount-rcloneview)
- [Plex-Pufferung beheben — VFS-Cache-Tuning in RcloneView](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)

<CloudSupportGrid />
