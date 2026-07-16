---
slug: manage-wasabi-cloud-sync-backup-rcloneview
title: "Wasabi-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - tayson
description: "Verwalten Sie Wasabi Hot-Cloud-Speicher mit RcloneView. Synchronisieren Sie S3-kompatible Buckets, planen Sie Backups und übertragen Sie Daten ohne Egress-Gebühren mit einer visuellen GUI."
keywords:
  - wasabi cloud sync
  - wasabi backup rcloneview
  - wasabi s3 compatible
  - wasabi storage manager
  - wasabi rclone gui
  - wasabi hot storage
  - wasabi zero egress
  - wasabi bucket management
  - wasabi cloud transfer
  - wasabi multi-cloud backup
tags:
  - wasabi
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Wasabi-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Wasabi bietet S3-kompatiblen Hot-Speicher ohne Egress-Gebühren, und RcloneView macht die Verwaltung dieser Buckets so einfach wie Drag-and-Drop.

Wasabi hat sich mit einem transparenten Preismodell eine starke Position im Object-Storage-Markt erarbeitet: 7,99 $ pro TB/Monat ohne Gebühren für Egress, API-Aufrufe oder Datenabruf. Anders als Cold-Storage-Tarife, die häufigen Zugriff bestrafen, ist jeder Wasabi-Bucket Hot-Speicher — das heißt, Ihre Dateien sind sofort zugänglich, ohne Abrufverzögerungen. RcloneView bietet eine vollständige grafische Oberfläche für Wasabi und ermöglicht es Ihnen, Buckets über alle Wasabi-Regionen hinweg zu verwalten, Synchronisationen mit anderen Clouds durchzuführen und Backup-Zeitpläne zu automatisieren, ohne Skripte zu schreiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wasabi in RcloneView verbinden

Um Wasabi hinzuzufügen, öffnen Sie den Remote-Manager und wählen Sie **S3-compatible** als Anbietertyp, dann wählen Sie **Wasabi** aus der Anbieterliste. Geben Sie Ihren Access Key und Secret Key ein und wählen Sie den passenden Region-Endpunkt. Wasabi betreibt Rechenzentren unter anderem in us-east-1 (Ashburn), us-east-2 (Manassas), us-west-1 (Hillsboro), us-central-1 (Dallas), eu-central-1 (Amsterdam), eu-central-2 (Frankfurt), eu-west-1 (London), eu-west-2 (Paris) und ap-northeast-1 (Tokio).

Die Wahl der richtigen Region ist entscheidend. Wasabi berechnet eine Mindestspeicherdauer von 90 Tagen — löschen Sie eine Datei vor Ablauf dieser 90 Tage, wird Ihnen der volle Zeitraum in Rechnung gestellt. Die Wahl einer Region nahe Ihrer primären Datenquelle reduziert die Latenz bei Uploads und Synchronisationen, was bei großen wiederkehrenden Jobs wichtig wird.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Wasabi remote in RcloneView Remote Manager" class="img-large img-center" />

## Dateiverwaltung per Drag-and-Drop

Nach dem Verbinden erscheinen Wasabi-Buckets im Zwei-Bereich-Explorer wie jeder andere Remote. Sie können Ordnerhierarchien durchsuchen, Dateien in der Vorschau ansehen und Metadaten prüfen. Wenn Sie Dateien von einem lokalen Laufwerk oder einem anderen Cloud-Remote auf den Wasabi-Bereich ziehen, startet die Übertragung sofort.

Die Multithread-Engine von RcloneView eignet sich gut für die Infrastruktur von Wasabi. Wasabi unterstützt Uploads mit hohem Durchsatz, und RcloneView lässt Sie parallele Übertragungen und Chunk-Größen konfigurieren, um die Bandbreitennutzung zu maximieren. Bei Datensätzen im mehrstelligen Terabyte-Bereich können Sie einen anhaltenden Durchsatz erreichen, der eine Gigabit-Verbindung auslastet.

Der Echtzeit-Übertragungsmonitor zeigt Fortschritt pro Datei, Geschwindigkeit und geschätzte verbleibende Zeit. Tritt bei einer Übertragung ein vorübergehender Fehler auf — ein Netzwerkaussetzer oder ein 503 von der API — versucht RcloneView es automatisch erneut, mit konfigurierbaren Backoff-Intervallen.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging and dropping files to Wasabi storage in RcloneView" class="img-large img-center" />

## Backups automatisieren und Cloud-übergreifend synchronisieren

Die Egress-freie Preisgestaltung von Wasabi macht es zu einem idealen Knotenpunkt für Multi-Cloud-Backup-Strategien. Sie können Daten von Wasabi zu Google Drive, AWS S3 oder einem lokalen NAS abrufen, ohne sich um Download-Kosten sorgen zu müssen. Der Job-Scheduler von RcloneView lässt Sie diese Übertragungen nach einem Cron-Zeitplan automatisieren.

Ein gängiges Muster ist es, Wasabi als zentrales Backup-Repository zu nutzen: nächtliche Synchronisationen von Google Drive und Dropbox nach Wasabi planen und dann wöchentlich eine Kopie von Wasabi zu einem sekundären Anbieter wie Backblaze B2 für geografische Diversität ausführen. Die Job-Verkettung von RcloneView lässt Sie diese Workflows definieren und von einem einzigen Dashboard aus überwachen.

Wasabi unterstützt außerdem Object Lock für unveränderliche Backups. In Kombination mit Versionierung können Sie Write-Once-Read-Many-(WORM)-konforme Buckets erstellen, die regulatorische Anforderungen an die Datenaufbewahrung erfüllen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated backups to Wasabi storage in RcloneView" class="img-large img-center" />

## Übertragungsleistung überwachen

Das Echtzeit-Überwachungspanel von RcloneView bietet detaillierte Einblicke in aktive Wasabi-Übertragungen. Sie sehen den Gesamtdurchsatz, den Fortschritt einzelner Dateien und ein fortlaufendes Protokoll abgeschlossener Vorgänge. Das Job-Verlaufspanel speichert Aufzeichnungen jeder vergangenen Übertragung, was es einfach macht, die Vollständigkeit von Backups zu prüfen oder Leistungsregressionen zu diagnostizieren.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Wasabi file transfers in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen Access Key in der Wasabi-Konsole und fügen Sie ihn als S3-kompatiblen Remote in RcloneView hinzu.
3. Durchsuchen Sie Ihre Wasabi-Buckets und ziehen Sie Dateien vom lokalen Speicher oder anderen Cloud-Remotes hinein.
4. Richten Sie einen geplanten Synchronisationsjob ein, um nächtliche Backups nach Wasabi zu automatisieren.

Die vorhersehbare Preisgestaltung von Wasabi eliminiert Überraschungen bei Egress-Kosten, und die visuelle Oberfläche von RcloneView macht es überflüssig, sich die S3-CLI-Syntax für alltägliche Vorgänge zu merken.

---

**Weiterführende Anleitungen:**

- [S3, Wasabi und R2 mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [IDrive e2 S3 Cloud-Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Storj Decentralized Cloud Sync mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)

<CloudSupportGrid />
