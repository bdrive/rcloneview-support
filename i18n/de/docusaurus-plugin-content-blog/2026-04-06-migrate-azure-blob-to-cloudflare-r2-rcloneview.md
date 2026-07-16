---
slug: migrate-azure-blob-to-cloudflare-r2-rcloneview
title: "Azure Blob Storage mit RcloneView zu Cloudflare R2 migrieren: Migration ohne Egress-Kosten"
authors:
  - tayson
description: Migrieren Sie mit RcloneView von Azure Blob Storage zu Cloudflare R2 — sparen Sie sich Egress-Gebühren, richten Sie beide Remotes ein, übertragen Sie Daten und überprüfen Sie die Integrität visuell.
keywords:
  - rcloneview
  - azure blob to cloudflare r2
  - cloudflare r2 migration
  - azure blob storage
  - zero egress
  - s3 compatible storage
  - rclone GUI
  - cloud migration
  - r2 storage
  - cost optimization
tags:
  - RcloneView
  - azure
  - cloudflare-r2
  - r2
  - migration
  - cloud-migration
  - s3-compatible
  - guide
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Azure Blob Storage mit RcloneView zu Cloudflare R2 migrieren: Migration ohne Egress-Kosten

> Azure Blob Storage ist leistungsstark, aber die Egress-Gebühren summieren sich schnell. **Cloudflare R2** bietet S3-kompatiblen Objektspeicher ohne Egress-Kosten — und **RcloneView** übernimmt die Migration auf visuelle Weise.

Azure Blob Storage ist das Rückgrat vieler Cloud-Architekturen. Es ist zuverlässig, funktionsreich und tief in das Azure-Ökosystem integriert. Doch es gibt einen anhaltenden Schmerzpunkt: **Egress-Gebühren**. Jedes von Azure Blob heruntergeladene Gigabyte kostet Geld, und bei Anwendungen, die häufig Daten ausliefern — CDNs, APIs, Media-Delivery oder Analyse-Pipelines — können diese Kosten die reinen Speicherkosten bei Weitem übersteigen.

Cloudflare R2 eliminiert Egress-Kosten vollständig. Sie zahlen nur für Speicher und Operationen, ohne Bandbreitenkosten für Lesevorgänge. Bei Workloads, bei denen häufiger gelesen als geschrieben wird, kann R2 Ihre Cloud-Speicher-Rechnung drastisch senken. RcloneView macht die Migration unkompliziert — verbinden Sie beide Anbieter, übertragen Sie Ihre Daten und prüfen Sie, ob alles übereinstimmt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von Azure Blob zu Cloudflare R2 wechseln

Die Entscheidung läuft meist auf die Wirtschaftlichkeit hinaus:

- **Keine Egress-Gebühren**: R2 verlangt nichts für heruntergeladene Daten. Azure berechnet je nach Region und Volumen 0,05–0,12 $/GB.
- **S3-API-Kompatibilität**: R2 unterstützt die S3-API, sodass bestehende Tools, SDKs und Anwendungen mit minimalen Änderungen weiterlaufen.
- **Vorhersehbare Preise**: R2 berechnet 0,015 $/GB pro Monat für Speicher und Pauschalpreise für Operationen. Keine versteckten Stufen oder Verpflichtungen für reservierte Kapazität.
- **Cloudflare-Integration**: Wenn Sie Cloudflare bereits für DNS, CDN oder Workers nutzen, fügt sich R2 nahtlos in Ihren Stack ein.
- **Keine Mindestspeicherdauer**: Anders als bei manchen Anbietern bestraft R2 Sie nicht dafür, dass Sie Daten früh löschen.

### Schneller Kostenvergleich

| Kostenfaktor | Azure Blob (Hot, East US) | Cloudflare R2 |
|---|---|---|
| Speicher pro GB/Monat | ~0,018 $ | 0,015 $ |
| Egress pro GB | 0,05–0,12 $ | 0,00 $ |
| Class-A-Operationen (Schreibvorgänge) pro 1 Mio. | ~0,065 $ | 4,50 $ |
| Class-B-Operationen (Lesevorgänge) pro 1 Mio. | ~0,005 $ | 0,36 $ |

Bei leselastigen Workloads können allein die Einsparungen bei den Egress-Kosten die Migration rechtfertigen.

## Schritt 1: Beide Remotes einrichten

Verbinden Sie Azure Blob und Cloudflare R2 in RcloneView:

1. Klicken Sie in RcloneView auf **+ New Remote**.
2. **Azure Blob Storage hinzufügen**: Wählen Sie das Azure-Blob-Backend, geben Sie Ihren Storage-Account-Namen und -Schlüssel (oder die Connection-String) ein. Vergeben Sie einen Namen (z. B. `AzureBlob`).
3. **Cloudflare R2 hinzufügen**: Wählen Sie S3-kompatiblen Speicher, wählen Sie Cloudflare R2 als Anbieter. Geben Sie Ihre R2 Access Key ID, den Secret Access Key und die Endpoint-URL aus Ihrem Cloudflare-Dashboard ein. Vergeben Sie einen Namen (z. B. `CloudflareR2`).
4. Bestätigen Sie, dass beide Remotes im Explorer sichtbar sind.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Schritt 2: R2-Buckets vorbereiten

Bevor Sie Daten übertragen:

- **Erstellen Sie Ziel-Buckets** in R2, die Ihre Azure-Container widerspiegeln. Dies können Sie über das Cloudflare-Dashboard oder direkt im Explorer von RcloneView tun.
- **Prüfen Sie die Namenskonventionen**: Azure-Container-Namen und R2-Bucket-Namen folgen ähnlichen Regeln (Kleinbuchstaben, Bindestriche erlaubt), sodass sich die meisten Namen direkt übertragen lassen.
- **Prüfen Sie die Kompatibilität der Objektschlüssel**: Azure Blob unterstützt einige Schlüsselmuster, die eventuell angepasst werden müssen. Überprüfen Sie Schlüssel mit Sonderzeichen.

## Schritt 3: Migration durchführen

Öffnen Sie Azure Blob auf der einen Seite und Cloudflare R2 auf der anderen Seite im Zwei-Fenster-Explorer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Azure Blob and Cloudflare R2 side by side in RcloneView" class="img-large img-center" />

### Für kleine Container

Ziehen Sie Container oder Ordner per Drag-and-Drop direkt von Azure Blob zu R2. RcloneView überträgt die Dateien im Hintergrund mit Fortschrittsanzeige.

### Für große Container

Erstellen Sie für mehr Zuverlässigkeit einen **Copy**-Job:

1. Wählen Sie den Azure-Blob-Container als Quelle.
2. Wählen Sie den entsprechenden R2-Bucket als Ziel.
3. Führen Sie einen **Dry Run** aus, um den Umfang der Übertragung zu prüfen.
4. Führen Sie den Job aus. RcloneView zeigt den Fortschritt in Echtzeit an, einschließlich Übertragungsgeschwindigkeit, Dateianzahl und geschätzter Restzeit.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Azure Blob to R2 migration" class="img-large img-center" />

## Schritt 4: Datenintegrität überprüfen

Nachdem die Migration abgeschlossen ist, überprüfen Sie, ob alles unversehrt angekommen ist:

1. Nutzen Sie die **Compare**-Funktion von RcloneView, um den Quellcontainer mit dem R2-Bucket zu vergleichen.
2. Überprüfen Sie die Vergleichsergebnisse — achten Sie auf Dateien, die als fehlend oder abweichend markiert sind.
3. Kopieren Sie fehlgeschlagene Elemente einzeln erneut.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Azure Blob container with R2 bucket to verify migration" class="img-large img-center" />

## Schritt 5: Migrationen im großen Maßstab bewältigen

Migrieren Sie Hunderte von Gigabyte oder Terabyte? Planen Sie entsprechend:

- **Azure-Egress-Kosten während der Migration**: Sie zahlen Azure-Egress-Gebühren für die ausgehende Datenübertragung. Erwägen Sie die Nutzung der Bandbreitenpreisstufen von Azure und führen Sie die Migration innerhalb eines einzigen Abrechnungszeitraums durch.
- **Parallelisierung nach Container**: Führen Sie separate Jobs für jeden Container aus, um die Last zu verteilen und die Fortschrittsverfolgung zu erleichtern.
- **Bei Fehlern fortsetzen**: Wenn ein Job unterbrochen wird, führen Sie ihn erneut aus. Die Copy-Operation von rclone überspringt bereits vorhandene und übereinstimmende Dateien, sodass nur das übertragen wird, was fehlt.
- **Bandbreitenüberlegungen**: Sowohl Azure als auch Cloudflare unterstützen Übertragungen mit hohem Durchsatz, aber die Bandbreite Ihres lokalen Rechners ist der Engpass, wenn die Übertragung über RcloneView läuft. Für die schnellsten Migrationen betreiben Sie RcloneView auf einer VM in der Nähe Ihrer Azure-Region.

## Schritt 6: Ihre Anwendungen aktualisieren

Sobald die Überprüfung abgeschlossen ist:

1. Aktualisieren Sie die Anwendungskonfiguration so, dass sie auf R2-Endpunkte statt auf Azure Blob verweist.
2. Testen Sie gründlich in einer Staging-Umgebung.
3. Schalten Sie den Produktionsverkehr um.
4. Behalten Sie die Azure-Blob-Daten für eine Rollback-Periode (30 Tage sind üblich), löschen Sie sie danach, um weitere Speicherkosten zu vermeiden.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Verbinden Sie Azure Blob und Cloudflare R2** im New-Remote-Assistenten.
3. **Migrieren, überprüfen und umschalten** — sparen Sie sich Egress-Gebühren auf Ihrer Cloud-Rechnung.

Keine Egress-Kosten bedeutet: Jeder Lesevorgang ist kostenlos. RcloneView bringt Ihre Daten dorthin.

---

**Weitere Anleitungen:**

- [Mit RcloneView von Cloudflare R2 zu AWS S3 wechseln](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [Cloudflare R2 und AWS S3 mit RcloneView vergleichen](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [Dropbox mit RcloneView zu Azure Blob Storage migrieren](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)

<CloudSupportGrid />
