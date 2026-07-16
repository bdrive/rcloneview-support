---
slug: migrate-wasabi-to-cloudflare-r2-rcloneview
title: "Wasabi mit RcloneView zu Cloudflare R2 migrieren"
authors:
  - tayson
description: "Migrieren Sie von Wasabi zu Cloudflare R2 mit RcloneView. Vergleichen Sie die Preise, richten Sie beide S3-kompatiblen Remotes ein, übertragen Sie Daten und überprüfen Sie die Migration Schritt für Schritt."
keywords:
  - rcloneview
  - wasabi to cloudflare r2
  - migrate wasabi to r2
  - cloudflare r2 migration
  - wasabi migration tool
  - s3 compatible migration
  - cloud storage migration
  - r2 no egress fees
  - wasabi data transfer
  - object storage migration gui
tags:
  - RcloneView
  - wasabi
  - cloudflare-r2
  - migration
  - cloud-migration
  - s3-compatible
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Wasabi mit RcloneView zu Cloudflare R2 migrieren

> Sowohl Wasabi als auch Cloudflare R2 sind S3-kompatibel und werden als kostengünstige Alternativen zu AWS S3 vermarktet, doch ihre Preismodelle unterscheiden sich in wichtigen Punkten — **RcloneView** übernimmt die Migration zwischen beiden mit einer visuellen Oberfläche.

Wasabi bietet Hot-Cloud-Speicher für 6,99 $/TB/Monat ohne Egress-Gebühren, verlangt jedoch eine Mindestspeicherdauer von 90 Tagen und eine monatliche Mindestgebühr. Cloudflare R2 berechnet 0,015 $/GB/Monat (etwa 15,36 $/TB) ohne Egress-Gebühren und ohne Mindestspeicherdauer. Bei Workloads mit häufigem Datenabruf oder kurzlebigen Objekten kann R2 deutlich günstiger sein. RcloneView verbindet sich mit beiden als S3-kompatible Remotes und bietet einen unkomplizierten Migrationsweg.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von Wasabi zu Cloudflare R2 migrieren

Beide Anbieter verzichten auf Egress-Gebühren, was ihr Hauptverkaufsargument gegenüber AWS S3 ist. Die Entscheidung zur Migration hängt in der Regel von Folgendem ab:

- **Mindestspeicherdauer**: Wasabi berechnet mindestens 90 Tage Speicherung pro Objekt, selbst wenn Sie es früher löschen. R2 hat keine Mindestdauer, was es besser für flüchtige oder häufig ersetzte Daten macht.
- **CDN-Integration**: R2 lässt sich nativ in das CDN-Netzwerk von Cloudflare integrieren und ermöglicht sofortigen öffentlichen Zugriff auf gespeicherte Objekte über eine Cloudflare-Domain ohne zusätzliche Konfiguration.
- **Workers-Integration**: Wenn Ihre Anwendung Cloudflare Workers nutzt, bietet R2 latenzfreien Zugriff von der Edge-Compute-Ebene aus.
- **Preisgestaltung im großen Maßstab**: Bei speicherintensiven Workloads kann der pauschale Preis pro TB von Wasabi günstiger sein. Bei Workloads mit hohem API-Aufrufvolumen kann das Preismodell von R2 (kostenlos für die ersten 10 Millionen Class-B-Anfragen pro Monat) im Vorteil sein.

## Einrichten beider Remotes

### Wasabi-Remote

Öffnen Sie den Remote Manager von RcloneView und fügen Sie ein S3-kompatibles Remote hinzu. Wählen Sie **Wasabi** als Anbieter, geben Sie Ihren Wasabi Access Key und Secret Key ein und geben Sie den Region-Endpunkt an (z. B. `s3.us-east-1.wasabisys.com`). Wählen Sie den Bucket aus, den Sie migrieren möchten.

### Cloudflare-R2-Remote

Fügen Sie ein weiteres S3-kompatibles Remote hinzu und wählen Sie **Cloudflare R2** als Anbieter. Geben Sie Ihre R2 Access Key ID und Secret Access Key ein (generiert im Cloudflare-Dashboard unter R2 > Manage R2 API Tokens). Der Endpunkt folgt dem Format `https://<account-id>.r2.cloudflarestorage.com`. Erstellen Sie einen Ziel-Bucket im Cloudflare-Dashboard oder lassen Sie RcloneView während der Einrichtung einen erstellen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Wasabi and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Durchführung der Migration

Öffnen Sie Wasabi im linken Bereich und R2 im rechten Bereich. Navigieren Sie zum Quell-Bucket auf Wasabi und zum Ziel-Bucket auf R2.

Da beide Anbieter die S3-API verwenden, ist die Übertragung von Metadaten unkompliziert — Content-Types, Cache-Control-Header und benutzerdefinierte Metadaten werden übernommen. RcloneView nutzt serverseitige Metadaten während der Übertragung und bewahrt so Objekteigenschaften ohne zusätzliche Konfiguration.

Verwenden Sie für die anfängliche Migration einen Kopierjob. RcloneView vergleicht Dateien anhand von MD5-Prüfsummen (sowohl Wasabi als auch R2 liefern Standard-MD5-ETags für Nicht-Multipart-Uploads) und überträgt nur neue oder geänderte Dateien. Multithreaded-Übertragungen mit konfigurierbarer Parallelität halten die Migration effizient — setzen Sie die Übertragungen für große Bucket-Migrationen auf 8-16.

Beachten Sie die Mindestspeicherdauer von Wasabi: Wenn Objekte kürzlich (innerhalb der letzten 90 Tage) hochgeladen wurden, wird Ihnen auf Wasabi weiterhin die vollen 90 Tage berechnet, selbst wenn Sie sie löschen. Planen Sie Ihren Migrationszeitplan entsprechend — migrieren Sie zuerst, überprüfen Sie, und löschen Sie erst nach Ablauf des 90-Tage-Fensters von Wasabi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Wasabi to Cloudflare R2 in RcloneView" class="img-large img-center" />

## Überprüfung der Migration

Verwenden Sie nach der Übertragung die Vergleichsfunktion von RcloneView, um zu überprüfen, ob jedes Objekt auf R2 angekommen ist. Wählen Sie die Wasabi-Quelle und das R2-Ziel aus und führen Sie einen Ordnervergleich durch. Identische Objekte erscheinen als übereinstimmend; fehlende oder abweichende Objekte werden zur Überprüfung hervorgehoben.

Für zusätzliche Sicherheit führen Sie eine Prüfoperation (Check) durch, die auf beiden Seiten Prüfsummen berechnet. Dies verifiziert die Datenintegrität auf Byte-Ebene.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Wasabi to R2 migration in RcloneView" class="img-large img-center" />

## Bereinigung nach der Migration

Nachdem Sie die Migration überprüft haben:

1. Aktualisieren Sie die Anwendungskonfigurationen, damit sie auf R2-Endpunkte statt auf Wasabi verweisen.
2. Testen Sie den Anwendungszugriff, um sicherzustellen, dass alles mit R2 funktioniert.
3. Warten Sie, bis die Mindestspeicherdauer von 90 Tagen bei Wasabi abgelaufen ist, bevor Sie Objekte löschen, um vorzeitige Löschgebühren zu vermeiden.
4. Löschen Sie den Wasabi-Bucket und deaktivieren Sie die Wasabi-Zugriffsschlüssel.

Wenn Sie während der Übergangsphase beide Anbieter parallel betreiben müssen, planen Sie einen täglichen Synchronisationsjob in RcloneView, um R2 mit neuen Objekten, die zu Wasabi hinzugefügt werden, auf dem aktuellen Stand zu halten.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling sync from Wasabi to R2 during transition" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Wasabi und Cloudflare R2 als S3-kompatible Remotes hinzu.
3. Führen Sie einen Kopierjob von Wasabi zu R2 aus.
4. Überprüfen Sie mit Vergleichs- und Prüfoperationen.
5. Aktualisieren Sie die Anwendungsendpunkte und bereinigen Sie Wasabi nach der Aufbewahrungsfrist.

Sowohl Wasabi als auch R2 sind starke S3-kompatible Optionen, aber wenn sich Ihr Workload-Profil ändert, macht RcloneView die Migration problemlos.

---

**Verwandte Anleitungen:**

- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
