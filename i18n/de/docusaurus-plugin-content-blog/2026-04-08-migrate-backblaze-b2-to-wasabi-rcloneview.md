---
slug: migrate-backblaze-b2-to-wasabi-rcloneview
title: "Backblaze B2 mit RcloneView zu Wasabi migrieren"
authors:
  - tayson
description: "Migrieren Sie von Backblaze B2 zu Wasabi mit RcloneView. Vergleichen Sie Preismodelle, richten Sie beide Remotes ein, übertragen Sie Daten und überprüfen Sie die Migration Schritt für Schritt."
keywords:
  - rcloneview
  - backblaze b2 to wasabi
  - migrate b2 to wasabi
  - wasabi cloud migration
  - backblaze migration tool
  - s3 compatible migration
  - cloud storage migration
  - wasabi no egress fees
  - b2 data transfer
  - object storage migration gui
tags:
  - backblaze-b2
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 mit RcloneView zu Wasabi migrieren

> Backblaze B2 bietet niedrige Speicherkosten, aber Egress- und API-Gebühren können sich summieren — **RcloneView** macht die Migration zu Wasabis Pauschalpreismodell einfach und überprüfbar.

Backblaze B2 und Wasabi gehören zu den beliebtesten S3-kompatiblen Object-Storage-Anbietern für kostenbewusste Teams. Während B2 für seinen niedrigen Preis pro GB Speicher bekannt ist (0,006 $/GB/Monat), umfasst sein Preismodell Egress-Gebühren (0,01 $/GB) und Transaktionsgebühren, die Teams mit leseintensiven Workloads überraschen können. Wasabi bietet einen Pauschalpreis (0,0069 $/GB/Monat) ohne Egress- oder API-Gebühren, wodurch die Kosten vollständig vorhersehbar sind. RcloneView übernimmt die Migration zwischen diesen beiden S3-kompatiblen Anbietern mit einer visuellen Oberfläche, die CLI-Scripting überflüssig macht.

Dieser Leitfaden behandelt die vollständige Migration — vom Verständnis der Preisunterschiede bis zur Überprüfung jedes einzelnen Objekts nach der Übertragung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von Backblaze B2 zu Wasabi migrieren

Die Entscheidung zur Migration hängt meist von der Vorhersehbarkeit ab. Die Speicherrate von B2 ist etwas niedriger als die von Wasabi, aber sobald man Egress- und Class-B/C-Transaktionen einbezieht, übersteigen die Gesamtkosten oft die Pauschalrate von Wasabi — besonders bei Workloads, die häufig Daten lesen.

Ein Beispiel: 10 TB Speicher bei B2 kosten 60 $/Monat. Wenn Sie monatlich 5 TB dieser Daten herunterladen (Medienbereitstellung, Build-Verteilung, Analysen), kommen 50 $ an Egress-Kosten hinzu. Class-B-Transaktionen für das Auflisten und Herunterladen von Dateien erhöhen die Kosten weiter. Bei Wasabi kosten dieselben 10 TB insgesamt 69 $/Monat, unabhängig davon, wie viele Daten Sie lesen oder wie viele API-Aufrufe Sie tätigen.

Wasabi hat außerdem eine Mindestspeicherdauer von 90 Tagen — wenn Sie Objekte vor Ablauf von 90 Tagen löschen, fällt eine anteilige Gebühr für den verbleibenden Zeitraum an. Berücksichtigen Sie dies bei der Planung, wenn Sie kurzlebige Daten speichern.

## Backblaze B2 in RcloneView einrichten

Öffnen Sie den Remote-Manager und fügen Sie ein Backblaze-B2-Remote hinzu. Sie können entweder die native B2-API oder die S3-kompatible API verwenden. Für Migrationszwecke wird der S3-kompatible Endpunkt empfohlen, da RcloneView dadurch dieselbe Übertragungslogik für Quelle und Ziel verwenden kann.

Geben Sie Ihre B2 Application Key ID und Ihren Application Key ein. Wenn Sie Bucket-spezifische Schlüssel haben, verwenden Sie diese für zusätzliche Sicherheit — der Schlüssel benötigt für die Quelle nur Lesezugriff.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 remote in RcloneView" class="img-large img-center" />

## Wasabi in RcloneView einrichten

Fügen Sie Wasabi als S3-kompatibles Remote hinzu. Wählen Sie im Remote-Manager **Amazon S3 Compatible** und konfigurieren Sie:

- **Provider**: Wasabi
- **Access Key** und **Secret Key**: Generiert über die Wasabi-Konsole
- **Region**: Wählen Sie die Region, die Ihren Benutzern am nächsten liegt (us-east-1, eu-central-1, ap-northeast-1 usw.)
- **Endpoint**: Automatisch basierend auf der gewählten Region konfiguriert

Erstellen Sie Ihren Ziel-Bucket in der Wasabi-Konsole oder über den Explorer von RcloneView. Wählen Sie dieselbe Region wie Ihre primäre Nutzerbasis, um die Latenz zu minimieren.

## Die Migration durchführen

Öffnen Sie den Zwei-Fenster-Explorer mit B2 links und Wasabi rechts. Navigieren Sie zum B2-Bucket, den Sie migrieren möchten, und zum Wasabi-Zielbucket.

Erstellen Sie für eine vollständige Migration einen Synchronisationsjob. RcloneView listet alle Objekte im B2-Bucket auf, vergleicht sie mit dem Wasabi-Ziel und überträgt nur das, was fehlt oder sich geändert hat. Da beide Anbieter MD5-Prüfsummen über ETag unterstützen, ist der Dateivergleich schnell und präzise.

Wichtige Überlegungen für die Übertragung:

- **Egress von B2**: Während der Migration fallen B2-Egress-Gebühren an. Um die Kosten zu minimieren, ziehen Sie Backblazes kostenlose Egress-Partnerschaft mit Cloudflare (falls für Ihr Setup zutreffend) oder die B2 Bandwidth Alliance in Betracht.
- **Parallele Übertragungen**: Sowohl B2 als auch Wasabi unterstützen hohe Parallelität. Setzen Sie parallele Übertragungen auf 8-16 für optimalen Durchsatz.
- **Große Dateien**: Beide Anbieter unterstützen Multipart-Uploads. RcloneView nutzt automatisch Multipart für Dateien oberhalb des Schwellenwerts und gewährleistet so eine zuverlässige Übertragung großer Objekte.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 to Wasabi in RcloneView two-pane explorer" class="img-large img-center" />

## Übertragungsfortschritt überwachen

Das Echtzeit-Überwachungsdashboard zeigt den Status jeder Datei in der Übertragungswarteschlange. Sie können den Fortschritt pro Datei, den Gesamtabschluss in Prozent und die aktuelle Übertragungsgeschwindigkeit verfolgen. Bei sich ändernden Netzwerkbedingungen können Sie die Übertragung pausieren und später fortsetzen — RcloneView macht dort weiter, wo es aufgehört hat.

Bei Migrationen im Multi-Terabyte-Bereich kann die Übertragung Stunden oder Tage dauern. Die Protokollierung von RcloneView stellt sicher, dass Sie eine vollständige Aufzeichnung darüber haben, was übertragen wurde, was übersprungen wurde und welche Fehler aufgetreten sind.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring B2 to Wasabi migration progress in RcloneView" class="img-large img-center" />

## Die Migration überprüfen

Führen Sie nach Abschluss der Übertragung einen Vergleichsvorgang zwischen der B2-Quelle und dem Wasabi-Ziel durch. RcloneView listet Dateien auf, die nur auf einer Seite existieren, sowie Dateien, die sich in Größe oder Prüfsumme unterscheiden. Ein sauberer Vergleich — keine Unterschiede — bestätigt eine erfolgreiche Migration.

Achten Sie auf:

- **Leere Verzeichnisse**: Object Storage kennt keine echten Verzeichnisse. Sowohl B2 als auch Wasabi verwenden präfixbasierte „Ordner“. RcloneView behandelt dies konsistent, aber überprüfen Sie, dass Ihre Anwendungslogik nicht von Verzeichnismarkierungen abhängt.
- **Erhalt von Metadaten**: Standardmetadaten (content-type, last-modified) bleiben bei S3-kompatiblen Übertragungen erhalten. Benutzerdefinierte Metadaten (x-amz-meta-*) werden ebenfalls von RcloneView übertragen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying B2 to Wasabi migration with compare in RcloneView" class="img-large img-center" />

## Aufräumen nach der Migration

Sobald Sie die Migration überprüft und alle Anwendungsendpunkte von B2 auf Wasabi umgestellt haben:

1. **DNS und Anwendungskonfigurationen aktualisieren**: Richten Sie Ihre Dienste auf den neuen Wasabi-Endpunkt aus.
2. **Eine abschließende Synchronisation durchführen**: Erfassen Sie alle Dateien, die während des Migrationszeitraums zu B2 hinzugefügt wurden.
3. **B2-Daten vorübergehend behalten**: Behalten Sie den B2-Bucket für einen Rollback-Zeitraum bei (typischerweise 2-4 Wochen).
4. **B2-Daten löschen**: Löschen Sie nach Bestätigung, dass alles auf Wasabi funktioniert, den B2-Bucket, um keine weiteren Speicherkosten zu verursachen.

Denken Sie bei der Planung Ihrer Aufbewahrungsstrategie an Wasabis Mindestspeicherdauer von 90 Tagen. Wenn Sie Objekte vor Ablauf von 90 Tagen aus Wasabi löschen, werden Ihnen die vollen 90 Tage in Rechnung gestellt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Backblaze B2 und Wasabi als S3-kompatible Remotes im Remote-Manager hinzu.
3. Führen Sie einen Synchronisationsjob von B2 zu Wasabi mit dem Zwei-Fenster-Explorer aus und verfolgen Sie den Fortschritt in Echtzeit.
4. Überprüfen Sie die Migration mit der Vergleichsfunktion und aktualisieren Sie Ihre Anwendungsendpunkte.

B2 und Wasabi sind beide hervorragende Object-Storage-Anbieter, aber wenn vorhersehbare Kosten wichtig sind, gewinnt das Pauschalpreismodell von Wasabi — und RcloneView macht den Wechsel mühelos.

---

**Verwandte Anleitungen:**

- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Echtzeit-Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
