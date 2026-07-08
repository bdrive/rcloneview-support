---
slug: migrate-google-drive-to-cloudflare-r2-rcloneview
title: "Google Drive mit RcloneView zu Cloudflare R2 migrieren"
authors:
  - tayson
description: "Migrieren Sie Google Drive-Dateien mit RcloneView zu Cloudflare R2. Schritt-für-Schritt-Anleitung zu Einrichtung, Google Docs-Konvertierung, Verifizierung und den Vorteilen von Zero Egress."
keywords:
  - rcloneview
  - google drive to cloudflare r2
  - migrate google drive
  - google drive migration tool
  - cloudflare r2 migration
  - cloud to cloud migration
  - google docs export
  - zero egress migration
  - google drive backup r2
  - cloud storage migration gui
tags:
  - RcloneView
  - google-drive
  - cloudflare-r2
  - migration
  - cloud-migration
  - cloud-to-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive mit RcloneView zu Cloudflare R2 migrieren

> Der Wechsel von Google Drive zu Cloudflare R2 eliminiert Egress-Gebühren und bietet Ihnen S3-kompatiblen Zugriff auf Ihre Daten — **RcloneView** übernimmt die gesamte Migration visuell.

Google Drive ist eine leistungsstarke Kollaborationsplattform, aber wenn die Speicheranforderungen wachsen und sich die Datenzugriffsmuster ändern, wenden sich viele Teams wegen der Skalierbarkeit und API-Flexibilität dem Objektspeicher zu. Cloudflare R2 bietet S3-kompatiblen Speicher ohne Egress-Gebühren und ist damit ein attraktives Ziel für Daten, die programmatisch bereitgestellt werden müssen. RcloneView überbrückt die Lücke zwischen diesen beiden sehr unterschiedlichen Speichermodellen und übernimmt die Konvertierung des Google Docs-Formats, große Dateiübertragungen und die Verifizierung nach der Migration in einer einzigen grafischen Oberfläche.

Diese Anleitung führt Sie durch den kompletten Migrationsprozess — von der Konfiguration beider Remotes bis zur Verifizierung, dass jede Datei unversehrt angekommen ist.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von Google Drive zu Cloudflare R2 migrieren

Die Preise für Google Drive beginnen bei 1,99 $/Monat für 100 GB und skalieren bis zu Enterprise-Stufen unter Google Workspace. Google Drive ist zwar für die Zusammenarbeit erschwinglich, aber nicht für den programmatischen Datenzugriff konzipiert. API-Ratenlimits, fehlende S3-Kompatibilität und Speicherkontingente pro Benutzer machen es ungeeignet für das Bereitstellen statischer Assets, das Hosten von Datensätzen oder das Versorgen von CI/CD-Pipelines.

Cloudflare R2 beseitigt diese Einschränkungen. Mit 0,015 $/GB/Monat und ohne Egress-Gebühren ist R2 für leselastige Workloads deutlich günstiger. Die S3-kompatible API bedeutet, dass vorhandene Tools und SDKs ohne Änderungen funktionieren. Wenn Ihre Daten ursprünglich auf Google Drive lagen, aber jetzt über S3-Endpunkte zugänglich sein müssen, ist die Migration zu R2 der logische nächste Schritt.

## Google Drive in RcloneView einrichten

Öffnen Sie den Remote-Manager und fügen Sie ein Google Drive-Remote hinzu. RcloneView verwendet OAuth 2.0 — klicken Sie auf Autorisieren, melden Sie sich bei Ihrem Google-Konto an und erteilen Sie den Zugriff. Das Token wird lokal in Ihrer rclone-Konfiguration gespeichert.

Wenn Sie von einem Google Workspace-Konto mit Shared Drives migrieren, können Sie RcloneView so konfigurieren, dass es auf bestimmte Shared Drives zugreift, statt nur auf Ihr persönliches My Drive. Dies ist für organisatorische Migrationen wichtig, bei denen Daten über mehrere Team-Drives verteilt sind.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive remote in RcloneView" class="img-large img-center" />

## Cloudflare R2 in RcloneView einrichten

Fügen Sie R2 als S3-kompatibles Remote hinzu. Wählen Sie im Remote-Manager **Amazon S3 Compatible** und konfigurieren Sie:

- **Provider**: Cloudflare
- **Access Key ID** und **Secret Access Key**: Generiert über das Cloudflare-Dashboard
- **Endpoint**: `https://<account-id>.r2.cloudflarestorage.com`

Erstellen Sie vor Beginn der Migration einen Ziel-Bucket im Cloudflare-Dashboard oder über den Explorer von RcloneView. Wählen Sie einen Bucket-Namen, der die Datenquelle widerspiegelt — zum Beispiel `gdrive-archive-2026` — um ihn später leicht identifizieren zu können.

## Umgang mit der Konvertierung des Google Docs-Formats

Dies ist der wichtigste Punkt bei der Migration von Google Drive. Native Google-Formate — Docs, Sheets, Slides, Drawings — sind keine Dateien im herkömmlichen Sinne. Sie existieren nur innerhalb des Google-Ökosystems und belegen null Bytes auf der Festplatte.

Wenn RcloneView diese Dateien exportiert, konvertiert es sie in Standardformate:

- **Google Docs** werden zu `.docx` (Microsoft Word)
- **Google Sheets** werden zu `.xlsx` (Microsoft Excel)
- **Google Slides** werden zu `.pptx` (Microsoft PowerPoint)

Sie können das Exportformat in den Remote-Einstellungen konfigurieren. Wenn Ihr Team PDF- oder OpenDocument-Formate bevorzugt, passen Sie dies vor Beginn der Migration entsprechend an. Beachten Sie, dass exportierte Dateien google-spezifische Funktionen wie Kommentare, den Vorschlagsmodus und Links für die Echtzeit-Zusammenarbeit verlieren.

Bei Dateien, die bereits in Standardformaten vorliegen (hochgeladene PDFs, Bilder, ZIPs), erfolgt die Übertragung als einfache Byte-für-Byte-Kopie ohne erforderliche Konvertierung.

## Die Migration ausführen

Nachdem beide Remotes konfiguriert sind, öffnen Sie den Zwei-Fenster-Explorer. Platzieren Sie Google Drive links und Ihren R2-Bucket rechts. Sie können das gesamte Drive migrieren oder bestimmte Ordner auswählen.

Für eine vollständige Migration verwenden Sie einen Synchronisationsjob. RcloneView zählt alle Dateien auf Google Drive auf, exportiert native Google-Formate und überträgt alles zu R2. Das Echtzeit-Überwachungs-Dashboard zeigt den Fortschritt pro Datei, die Übertragungsgeschwindigkeit und die geschätzte Fertigstellungszeit.

Für große Migrationen (Hunderte von Gigabyte oder mehr) sollten Sie folgende Optimierungen in Betracht ziehen:

- **Parallele Übertragungen erhöhen**: R2 verkraftet hohe Nebenläufigkeit gut. Erhöhen Sie die Anzahl der parallelen Übertragungen auf 8-16, um den Durchsatz zu maximieren.
- **Bandbreitenplanung nutzen**: Wenn Sie während der Geschäftszeiten migrieren, drosseln Sie die Bandbreite, um andere Netzwerknutzer nicht zu beeinträchtigen.
- **In Etappen durchführen**: Migrieren Sie Ordner für Ordner statt alles auf einmal. Dies erleichtert die Verifizierung jedes Batches und die Wiederaufnahme bei Unterbrechungen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to R2 migration progress in RcloneView" class="img-large img-center" />

## Die Migration mit Compare verifizieren

Führen Sie nach Abschluss der Migration die Vergleichsfunktion von RcloneView zwischen Google Drive und R2 aus. Die Vergleichsansicht zeigt:

- **Nur auf der Quelle vorhandene Dateien**: Elemente, deren Übertragung fehlgeschlagen ist oder die übersprungen wurden
- **Nur auf dem Ziel vorhandene Dateien**: Unerwartete Extras (selten, aber überprüfenswert)
- **Abweichende Dateien**: Größen- oder Hash-Abweichungen, die auf unvollständige Übertragungen hindeuten

Beachten Sie, dass Google Docs-Dateien immer als abweichend angezeigt werden, da sich das exportierte Format vom nullbytigen nativen Google-Format unterscheidet. Konzentrieren Sie sich für einen aussagekräftigen Vergleich auf Nicht-native Dateien. Wenn bei Standarddateien Abweichungen auftreten, führen Sie eine erneute Synchronisation aus, um nur die fehlenden oder geänderten Elemente zu übertragen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to R2 migration with compare in RcloneView" class="img-large img-center" />

## Nach der Migration: Inkrementelle Synchronisation

Nach der Erstmigration möchten Sie R2 während einer Übergangsphase möglicherweise mit Google Drive synchron halten. Richten Sie in RcloneView einen geplanten Synchronisationsjob ein — täglich oder stündlich, je nach Bedarf. So wird sichergestellt, dass neue Dateien, die zu Google Drive hinzugefügt werden, automatisch zu R2 repliziert werden, bis Sie vollständig umgestellt haben.

Sobald der Übergang abgeschlossen ist und alle Zugriffspunkte auf R2 verweisen, können Sie den Synchronisationsjob deaktivieren und die Google Drive-Daten optional archivieren oder löschen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Google Drive to R2 in RcloneView" class="img-large img-center" />

## Jobverlauf und Audit-Trail

Jeder Migrationslauf wird im Jobverlauf von RcloneView protokolliert. Sie können die Anzahl der übertragenen Dateien, die verschobenen Bytes, aufgetretene Fehler und die verstrichene Zeit für jeden Lauf einsehen. Dies bietet einen Audit-Trail für Compliance-Zwecke und hilft bei der Fehlerbehebung, falls während oder nach der Migration Probleme auftreten.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Google Drive to R2 migration runs" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Google Drive über OAuth und Ihr Cloudflare R2 als S3-kompatibles Remote hinzu.
3. Konfigurieren Sie die Google Docs-Exportformate (docx, xlsx, pptx oder Ihre bevorzugten Alternativen).
4. Führen Sie die Migration über den Zwei-Fenster-Explorer aus und verifizieren Sie die Ergebnisse mit der Vergleichsfunktion.

Google Drive glänzt bei der Zusammenarbeit, aber wenn Sie S3-kompatiblen, egress-freien Speicher benötigen, ist Cloudflare R2 das Ziel — und RcloneView die Brücke dorthin.

---

**Weitere Anleitungen:**

- [Google Drive hinzufügen](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
