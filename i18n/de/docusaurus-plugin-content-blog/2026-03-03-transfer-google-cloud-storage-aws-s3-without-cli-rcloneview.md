---
slug: transfer-google-cloud-storage-aws-s3-without-cli-rcloneview
title: "Dateien zwischen Google Cloud Storage und AWS S3 ohne CLI übertragen mit RcloneView"
authors:
  - tayson
description: "Verschieben, synchronisieren und migrieren Sie Daten zwischen Google Cloud Storage (GCS) und AWS S3 mit der visuellen GUI von RcloneView — kein gsutil, aws cli oder Scripting erforderlich."
keywords:
  - google cloud storage to s3
  - gcs to aws s3 transfer
  - google cloud storage migration
  - gcs s3 sync
  - transfer between gcs and s3
  - google cloud storage gui
  - gcs backup to s3
  - multi-cloud transfer gcs
  - google cloud storage rclone
  - gcs to s3 without cli
tags:
  - RcloneView
  - google-cloud-storage
  - aws-s3
  - cloud-storage
  - migration
  - sync
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dateien zwischen Google Cloud Storage und AWS S3 ohne CLI übertragen mit RcloneView

> Die Verwaltung von Daten zwischen Google Cloud Storage und AWS S3 bedeutet normalerweise, mit gsutil, aws cli und eigenen Skripten zu jonglieren. Mit RcloneView erledigen Sie das alles über eine visuelle Oberfläche — durchsuchen, vergleichen, synchronisieren und Übertragungen zwischen GCS und S3 in wenigen Minuten planen.

Multi-Cloud ist für die meisten Engineering-Teams Realität. Ihre ML-Trainingsdaten liegen in GCS-Buckets, Ihre Produktions-Assets befinden sich auf S3, und jemand muss beides synchron halten. Der traditionelle Ansatz — Shell-Skripte mit gsutil und aws cli schreiben — funktioniert, ist aber fragil, schwer zu überwachen und für Nicht-Techniker unmöglich zu verwalten.

RcloneView verbindet sich nativ mit GCS und S3 und bietet eine einheitliche GUI zum Durchsuchen, Übertragen, Vergleichen und Automatisieren von Datenbewegungen zwischen den beiden größten Cloud-Plattformen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Daten zwischen GCS und S3 verschieben?

Teams übertragen Daten zwischen Google Cloud Storage und AWS S3 aus mehreren häufigen Gründen:

**Multi-Cloud-Redundanz** — Das Speichern kritischer Daten bei zwei großen Anbietern schützt vor Ausfällen auf Anbieterebene und Vendor-Lock-in. Fällt eine Cloud aus, sind Ihre Daten über die andere zugänglich.

**Kostenoptimierung** — GCS und S3 haben unterschiedliche Preise für Speicher, Egress und Operationen. Kalte Daten zum jeweils günstigeren Anbieter für Ihr Nutzungsmuster zu verschieben, kann erhebliche Kosten sparen.

**Plattformübergreifende Workflows** — Ihr Data-Science-Team nutzt GCP (BigQuery, Vertex AI), aber Ihre Produktionsinfrastruktur läuft auf AWS. Daten müssen zwischen beiden fließen.

**Migration** — Der Umzug von GCP zu AWS (oder umgekehrt) ohne Ausfallzeit erfordert zuverlässige, fortsetzbare Übertragungen.

**Compliance und Datenresidenz** — Manche Vorschriften erfordern Datenkopien in bestimmten Regionen oder bei bestimmten Anbietern.

## Einrichten von GCS- und S3-Remotes

### Google Cloud Storage hinzufügen

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **Google Cloud Storage** aus der Anbieterliste.
3. Wählen Sie Ihre Authentifizierungsmethode:
   - **Service Account JSON** — Empfohlen für Server-zu-Server-Übertragungen. Laden Sie Ihre Service-Account-Schlüsseldatei hoch.
   - **OAuth (Browser-Login)** — Gut für persönliche GCP-Konten. Folgen Sie dem [OAuth-Login-Leitfaden](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login).
4. Legen Sie Ihre **project ID** und den Standard-**Bucket-Standort** fest, falls danach gefragt wird.
5. Speichern Sie das Remote — Ihre GCS-Buckets sind nun durchsuchbar.

### AWS S3 hinzufügen

1. Klicken Sie erneut auf **Add Remote**.
2. Wählen Sie **Amazon S3** aus der Anbieterliste.
3. Geben Sie Ihre **Access Key ID** und Ihren **Secret Access Key** ein.
4. Wählen Sie Ihre **Region** und den **Endpoint**.
5. Speichern — Ihre S3-Buckets erscheinen im Explorer.

Eine detaillierte S3-Einrichtung finden Sie im [AWS S3-Verbindungsleitfaden](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3).

<img src="/support/images/en/blog/new-remote.png" alt="Add GCS and S3 remotes in RcloneView" class="img-large img-center" />

## GCS und S3 nebeneinander durchsuchen

Sobald beide Remotes verbunden sind, öffnen Sie sie im zweigeteilten Explorer von RcloneView. GCS-Buckets links, S3-Buckets rechts (oder umgekehrt). Sie können:

- **Gleichzeitig navigieren** durch Buckets und Ordner auf beiden Seiten.
- **Dateigrößen, Daten und Anzahl anzeigen**, um zu verstehen, was wo liegt.
- **Dateien per Drag & Drop** direkt von GCS zu S3 ziehen — oder die integrierten Kopier-/Verschiebebefehle nutzen.

Diese Nebeneinander-Ansicht gibt Ihnen sofortige Sichtbarkeit in beide Clouds, ohne zwischen der GCP-Konsole und der AWS-Konsole wechseln zu müssen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse GCS and S3 side by side in RcloneView" class="img-large img-center" />

## Übertragungsszenarien

### Szenario 1: Einmalige Migration (GCS → S3)

Alle Daten für eine Plattformmigration von GCS zu S3 verschieben:

1. **Einen Copy-Job erstellen**:
   - Quelle: GCS-Remote → Ihren Bucket auswählen
   - Ziel: S3-Remote → Ziel-Bucket auswählen
2. **Für maximale Geschwindigkeit konfigurieren**:
   - Parallele Übertragungen: 8–16 (sowohl GCS als auch S3 handhaben hohe Parallelität gut)
   - Chunk-Größe: 64MB–128MB für große Dateien
   - `--fast-list`-Flag aktivieren, um das Auflisten von Verzeichnissen zu beschleunigen
3. **Den Job ausführen** und den Fortschritt in Echtzeit überwachen.

Führen Sie den Copy-Job bei großen Migrationen mehrmals aus. Nach der ersten vollständigen Kopie übertragen nachfolgende Läufe nur neue oder geänderte Dateien — das macht den Vorgang bei Unterbrechungen sicher fortsetzbar.

### Szenario 2: Laufende Synchronisation (bidirektional)

Einen GCS-Bucket und einen S3-Bucket kontinuierlich synchron halten:

1. **Einen Sync-Job erstellen** (GCS → S3) für die primäre Richtung.
2. **Planen Sie ihn**, stündlich oder täglich über [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) auszuführen.
3. **Einen umgekehrten Sync-Job hinzufügen** (S3 → GCS), falls Sie eine bidirektionale Synchronisation benötigen.
4. **Batch Jobs nutzen** (v1.3), um beide Richtungen nacheinander auszuführen.

### Szenario 3: Selektives Cross-Cloud-Backup

Nur bestimmte Daten in der anderen Cloud sichern:

1. **[Filter Rules](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview) verwenden**, um bestimmte Dateitypen oder Ordner ein- oder auszuschließen.
   - Beispiel: Nur `*.parquet`- und `*.csv`-Dateien synchronisieren (ML-Datensätze)
   - Beispiel: Verzeichnisse `tmp/` und `logs/` ausschließen
2. **Einen geplanten Copy-Job** mit diesen Filtern erstellen.

## GCS- und S3-Inhalte vergleichen

Verwenden Sie vor und nach Übertragungen den [Ordnervergleich](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents), um zu überprüfen, ob beide Buckets dieselben Daten enthalten:

- **Nur in GCS vorhandene Dateien** — Zur einfachen Identifizierung hervorgehoben.
- **Nur in S3 vorhandene Dateien** — Zeigt, was am Ziel, aber nicht an der Quelle existiert.
- **Unterschiedliche Dateien** — Dateien mit demselben Namen, aber unterschiedlicher Größe oder Prüfsumme.
- **Identische Dateien** — Bestätigte Übereinstimmungen in beiden Clouds.

Das ist bei der Migrationsverifizierung unschätzbar wertvoll: Nach dem Kopieren von Terabytes an Daten können Sie nachweisen, dass jede Datei unversehrt angekommen ist.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare GCS and S3 bucket contents" class="img-large img-center" />

## Übertragungsgeschwindigkeit optimieren

GCS und S3 sind beides leistungsstarke Object Stores, sodass Sie Übertragungen stark auslasten können:

| Einstellung | Empfohlener Wert | Warum |
|---------|-------------------|-----|
| Parallele Übertragungen | 8–16 | Beide Anbieter handhaben gleichzeitige Anfragen gut |
| Chunk-Größe | 64MB–128MB | Reduziert den API-Overhead bei großen Dateien |
| Checkers | 16–32 | Beschleunigt die Vergleichsphase bei großen Verzeichnissen |
| Puffergröße | 128MB | Gleicht Netzwerklatenz zwischen Cloud-Regionen aus |
| Fast-list | Aktiviert | Reduziert API-Aufrufe für das Auflisten von Verzeichnissen drastisch |

### Überlegungen zu regionsübergreifenden Übertragungen

Befindet sich Ihr GCS-Bucket in `us-central1` und Ihr S3-Bucket in `eu-west-1`, müssen Daten das Internet zwischen den Regionen durchqueren. Für beste Leistung:

- Halten Sie Quelle und Ziel wenn möglich in derselben geografischen Region.
- Führen Sie Übertragungen außerhalb der Spitzenzeiten durch, um Netzwerküberlastung zu vermeiden.
- Überwachen Sie die Egress-Kosten — sowohl GCS als auch S3 berechnen Gebühren für Daten, die ihre Netzwerke verlassen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor GCS to S3 transfer speed" class="img-large img-center" />

## GCS-↔-S3-Workflows automatisieren

### Tägliche Datenpipeline

Richten Sie einen geplanten Job ein, der jede Nacht ausgeführt wird:

1. Neue ML-Trainingsdaten von GCS → S3 für AWS-basierte Trainingsjobs synchronisieren.
2. Ergebnisse von S3 → GCS für die BigQuery-Analyse zurückkopieren.
3. Über [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) benachrichtigt werden, wenn die Pipeline abgeschlossen ist.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS to S3 data sync" class="img-large img-center" />

### Disaster-Recovery-Replikation

Eine Live-Kopie kritischer S3-Daten in GCS pflegen (oder umgekehrt):

1. Erstellen Sie einen Sync-Job von Ihrem primären Bucket zum DR-Bucket.
2. Planen Sie ihn stündlich für ein RPO (Recovery Point Objective) unter 1 Stunde.
3. Nutzen Sie [Checksum-Verifizierung](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview), um die Datenintegrität sicherzustellen.

### Kostenbasiertes Tiering

Verschieben Sie Daten zum jeweils für das Zugriffsmuster günstigeren Anbieter:

1. Häufig genutzte Daten → Beim Anbieter belassen, der Ihrer Rechenleistung am nächsten liegt.
2. Kalte/archivierte Daten → Je nach Preisgestaltung zu GCS Nearline/Coldline oder S3 Glacier verschieben.
3. Regelmäßige Tiering-Jobs planen, um die Kosten optimiert zu halten.

## GCS vs. S3: RcloneView als einheitliche Schicht nutzen

Statt zwei verschiedene CLIs zu lernen (gsutil für GCS, aws s3 für S3), bietet RcloneView eine einzige Oberfläche für beide. Das bedeutet:

- **Nur ein Tool zu lernen** — Ihr Team muss nicht zwei verschiedene Kommandozeilen-Schnittstellen beherrschen.
- **Visuelle Bedienung** — Drag & Drop, Rechtsklick-Menüs und dialogbasierte Konfiguration statt Flags und Argumente.
- **Konsistente Überwachung** — Dieselbe [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history) und [Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring), unabhängig davon, welche Clouds beteiligt sind.
- **Portable Jobs** — Ein Job, der GCS zu S3 synchronisiert, funktioniert genauso wie einer, der OneDrive zu Dropbox synchronisiert.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Unified job history for GCS and S3 transfers" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html) (Windows, macOS, Linux).
2. **Ihr GCS-Remote hinzufügen** mit einem Service-Account-Schlüssel oder OAuth-Login.
3. **Ihr S3-Remote hinzufügen** mit Access-Key-Zugangsdaten.
4. **Beide nebeneinander durchsuchen** im Explorer.
5. **Einen Copy- oder Sync-Job erstellen** für Ihren Anwendungsfall.
6. **Planen und überwachen** für eine freihändige Multi-Cloud-Datenverwaltung.

Hören Sie auf, mit gsutil und aws cli zu jonglieren. RcloneView vereint die GCS- und S3-Verwaltung in einem einzigen visuellen Workflow — und macht Multi-Cloud-Datenübertragungen für Ihr gesamtes Team zugänglich, nicht nur für die Engineers, die die CLI beherrschen.

---

**Weiterführende Leitfäden:**

- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Remote über browserbasierten Login hinzufügen (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Echtzeit-Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Checksum-verifizierte Cloud-Migrationen](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
