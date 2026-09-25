---
slug: get-public-link-share-files-rcloneview
title: "Öffentlichen Link abrufen — Cloud-Dateien sofort teilen mit RcloneView"
authors:
  - kai
description: "Erfahren Sie, wie Sie direkt im Datei-Explorer von RcloneView teilbare öffentliche Links für Cloud-Dateien erzeugen — ganz ohne Browser-Tab."
keywords:
  - öffentlichen link abrufen
  - cloud dateien teilen
  - teilbarer link cloud speicher
  - RcloneView öffentlicher link
  - google drive freigabelink
  - dropbox freigabelink
  - box freigabelink
  - cloud dateifreigabe
  - rclone öffentlicher link
  - onedrive freigabelink
tags:
  - RcloneView
  - feature
  - file-management
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Öffentlichen Link abrufen — Cloud-Dateien sofort teilen mit RcloneView

> Überspringen Sie den Browser: Klicken Sie in RcloneView mit der rechten Maustaste auf eine beliebige Datei und erzeugen Sie in Sekunden einen teilbaren öffentlichen Link.

Eine einzelne Datei aus der Cloud zu teilen bedeutet normalerweise, einen Browser-Tab zu öffnen, sich in der Web-Konsole des Anbieters anzumelden, den Freigabe-Button zu suchen und einen Link zu kopieren, der möglicherweise nicht die erwarteten Berechtigungen hat. RcloneView bündelt diesen gesamten Ablauf in einem einzigen Kontextmenüpunkt per Rechtsklick. Wenn Sie Dateien über mehrere Anbieter hinweg im selben Explorer verwalten, zählt diese Konsistenz mehr, als es klingt — Sie müssen nicht mehr zwischen fünf verschiedenen Web-Oberflächen wechseln, nur um jemandem eine Datei zu schicken.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## So funktioniert "Öffentlichen Link abrufen"

Der Befehl **Öffentlichen Link abrufen (Get Public Link)** befindet sich im selben Rechtsklick-Kontextmenü wie Copy, Cut, Rename und Download. Wählen Sie eine oder mehrere Dateien in der Dateiliste eines beliebigen verbundenen Remotes aus, klicken Sie mit der rechten Maustaste und wählen Sie Get Public Link. RcloneView leitet die Anfrage an das zugrunde liegende rclone-Backend weiter, das die API des Anbieters bittet, einen Link mit den vom Backend unterstützten Berechtigungen zu erzeugen — schreibgeschützt, ablaufend oder passwortgeschützt, je nachdem, was der Anbieter zulässt.

Da dies anbieterspezifisches Verhalten ist, variieren das genaue Linkformat und die Optionen. Ein Dropbox-Link verhält sich anders als ein Box-Link, und nicht jeder Remote-Typ unterstützt öffentliche Links überhaupt — protokollbasierte Remotes wie reine SFTP- oder FTP-Server haben in der Regel kein "Freigabe"-Konzept wie herkömmliche Cloud-Speicherdienste. RcloneView täuscht keinen universellen Button vor, der bei nicht unterstützten Remotes stillschweigend fehlschlägt, sondern zeigt genau das an, was das Backend tatsächlich unterstützt.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote explorer with right-click context menu open" class="img-large img-center" />

## Wo dies in einen alltäglichen Arbeitsablauf passt

Teams, die Kundenlieferungen, Marketingmaterial oder einmalige Dokumentenanfragen jonglieren, profitieren am meisten davon, dass die Linkerstellung im selben Fenster stattfindet, in dem die Dateien bereits liegen. Statt sich zu merken, auf welchem Anbieter eine Datei liegt, und dessen Website separat zu öffnen, navigieren Sie im Explorer-Panel von RcloneView zur Datei und erzeugen den Link direkt vor Ort. Anders als reine Mounting-Tools bietet RcloneView auch Sync und Ordnervergleich — bereits mit der FREE-Lizenz —, sodass dasselbe Fenster, mit dem Sie heute einen Link teilen, morgen denselben Ordner nach Zeitplan sichern kann.

Das ist besonders nützlich, wenn die Assets eines einzelnen Projekts über mehrere Anbieter verstreut sind — etwa RAW-Fotoexporte auf Backblaze B2 und kundenfertige Probeabzüge auf Dropbox. Sie brauchen nicht zwei Arbeitsabläufe, sondern nur einen Explorer mit zwei geöffneten Tabs.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud file transfer panel in RcloneView" class="img-large img-center" />

## Öffentliche Links mit Ordnerorganisation kombinieren

Vor dem Teilen lohnt es sich, mit der Dateilistenansicht von RcloneView genau zu prüfen, was Sie freigeben. Wechseln Sie zur List View, um Dateigrößen und Änderungsdaten zu prüfen, oder zur Thumbnail View, wenn Sie Bilder teilen und schnell visuell bestätigen möchten, dass Sie die richtige Datei ausgewählt haben. Get Public Link funktioniert auch bei mehrfach ausgewählten Dateien, sodass Sie mehrere Links in einem Durchgang erzeugen können, statt den Rechtsklick jedes Mal zu wiederholen.

Muss der Link für eine geplante, wiederkehrende Freigabe dauerhaft aktiv bleiben — zum Beispiel ein wöchentlicher Bericht, den ein Kunde immer von derselben URL abruft —, kombinieren Sie ihn mit einem Sync-Auftrag, der die zugrunde liegende Datei unter demselben Pfad aktuell hält, sodass der Link selbst nie neu erzeugt werden muss.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled file updates" class="img-large img-center" />

## Erste Schritte

1. Laden Sie **RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Verbinden Sie über New Remote den Remote, auf dem sich die zu teilende Datei befindet.
3. Navigieren Sie im Explorer-Panel zur Datei, klicken Sie mit der rechten Maustaste und wählen Sie Get Public Link.
4. Kopieren Sie den erzeugten Link und versenden Sie ihn — ohne separate Browser-Anmeldung.

Sobald dies zur Routine wird, benötigen Sie zum Teilen einer Cloud-Datei stets dieselben drei Klicks, unabhängig davon, bei welchem der 90+ unterstützten Anbieter sie liegt.

---

**Verwandte Anleitungen:**

- [Fehler "Öffentlicher Link nicht unterstützt" beheben — Dateien korrekt teilen mit RcloneView](https://rcloneview.com/support/blog/fix-public-link-not-supported-errors-rcloneview)
- [Größe abrufen — Cloud-Speichernutzung sofort berechnen mit RcloneView](https://rcloneview.com/support/blog/get-size-calculate-cloud-storage-usage-rcloneview)
- [Miniaturansicht — Cloud-Bilder visuell durchsuchen und vorschauen mit RcloneView](https://rcloneview.com/support/blog/thumbnail-view-image-preview-cloud-rcloneview)

<CloudSupportGrid />
