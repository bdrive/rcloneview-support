---
slug: migrate-proton-drive-to-wasabi-rcloneview
title: "Proton Drive zu Wasabi migrieren — Dateien übertragen mit RcloneView"
authors:
  - kai
description: "Verschieben Sie verschlüsselte Dateien von Proton Drive zu Wasabi Object Storage mit der direkten Cloud-zu-Cloud-Übertragung von RcloneView — ohne lokalen Download."
keywords:
  - Proton Drive zu Wasabi migrieren
  - Proton Drive zu Wasabi Übertragung
  - Cloud-zu-Cloud-Migration
  - Wasabi Object Storage Backup
  - Proton Drive Backup
  - Dateien von Proton Drive übertragen
  - RcloneView Migration
  - Migration verschlüsselter Cloud-Speicher
tags:
  - RcloneView
  - proton-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton Drive zu Wasabi migrieren — Dateien übertragen mit RcloneView

> Verschieben Sie Dateien direkt von Proton Drive zu Wasabi Object Storage, ohne den Umweg über eine lokale Festplatte.

Proton Drive ist auf datenschutzorientierten persönlichen Speicher ausgelegt, aber nicht für die Workloads gemacht, die Wasabi gut bewältigt — große Medienbibliotheken, Anwendungssicherungen oder Datensätze, die S3-kompatiblen Zugriff durch andere Tools benötigen. Wenn ein Nutzer den Anwendungsbereich von Proton Drive überschreitet oder einfach eine zweite, günstigere Langzeitkopie möchte, verschiebt RcloneView die Dateien direkt zwischen beiden Diensten, indem es sich gleichzeitig mit beiden Remotes verbindet, statt zuerst alles lokal herunterzuladen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Proton Drive wird in RcloneView mit E-Mail und Passwort (plus optionaler 2FA) eingerichtet, während Wasabi als S3-kompatibles Remote mit einer Access Key ID, einem Secret Access Key und dem passenden regionalen Endpunkt hinzugefügt wird. Beide Remotes erscheinen als Tabs im Explorer, sodass ein Nutzer einen Proton-Drive-Ordner in einem Bereich und einen Wasabi-Bucket im anderen durchsuchen kann, bevor eine Übertragung gestartet wird.

<img src="/support/images/en/blog/new-remote.png" alt="Einrichten von Proton Drive und Wasabi Remotes in RcloneView" class="img-large img-center" />

RcloneView verbindet auch S3, Azure und Backblaze B2 mit vollem Lese-/Schreibzugriff bereits in der FREE-Lizenz, sodass für die Einrichtung der Wasabi-Seite dieser Migration keine kostenpflichtige Stufe erforderlich ist.

## Die Cloud-zu-Cloud-Übertragung durchführen

Sind beide Remotes geöffnet, löst das Ziehen eines Ordners vom Proton-Drive-Bereich in den Wasabi-Bereich eine direkte Kopie aus — die Daten fließen über RcloneView direkt von Proton Drive zu Wasabi, ohne jemals die lokale Festplatte zu berühren. Für größere Migrationen ist der Synchronisationsassistent das bessere Werkzeug: Er unterstützt eine vollständige Einweg-Synchronisation von der Proton-Drive-Quelle zu einem Wasabi-Zielbucket, mit konfigurierbarer Anzahl gleichzeitiger Übertragungen, um die verfügbare Bandbreite optimal zu nutzen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Dateiübertragung von Proton Drive zu Wasabi in RcloneView" class="img-large img-center" />

Der Dry-Run-Modus lohnt sich vor jeder größeren Migration — er listet genau auf, welche Dateien kopiert werden, bevor tatsächlich etwas verschoben wird, und deckt so Filterfehler oder unerwartete Ordnerstrukturen frühzeitig auf.

## Eine vollständige Migration bestätigen

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-Drop-Dateiübertragung in ein Wasabi-Remote in RcloneView" class="img-large img-center" />

Sobald der Synchronisationsauftrag abgeschlossen ist, zeigt der Übertragungstab in der unteren Info-Ansicht die insgesamt verschobenen Dateien, die Übertragungsgeschwindigkeit und alle während des Auftrags aufgetretenen Fehler an. Bei Migrationen, die als gespeicherter Auftrag statt als einmalige Übertragung ausgeführt werden, führt der Auftragsverlauf ein dauerhaftes Protokoll — Startzeit, Dauer, Gesamtgröße und Abschlussstatus —, sodass ein klarer Nachweis besteht, dass jede Datei bei Wasabi angekommen ist, bevor die Proton-Drive-Kopie stillgelegt wird.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Proton-Drive-Remote mit Ihrer Konto-E-Mail und dem Passwort hinzu.
3. Fügen Sie Ihr Wasabi-Remote mit dessen Access Key, Secret Key und regionalem Endpunkt hinzu.
4. Führen Sie zuerst einen Dry Run aus, starten Sie dann die Synchronisation und bestätigen Sie die Übertragung im Auftragsverlauf.

Eine Proton-Drive-Ordner stillzulegen ist deutlich weniger stressig, wenn ein verifiziertes Protokoll zeigt, dass jede Datei bereits sicher bei Wasabi angekommen ist.

---

**Verwandte Anleitungen:**

- [Proton Drive verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Wasabi-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Proton Drive zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
