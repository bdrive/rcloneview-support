---
slug: migrate-onedrive-to-storj-rcloneview
title: "OneDrive zu Storj migrieren — Dateien übertragen mit RcloneView"
authors:
  - steve
description: "Schritt-für-Schritt-Anleitung zur Migration von Dateien von Microsoft OneDrive zu Storj Decentralized Cloud Storage mit RcloneView — mit Prüfsummenverifizierung und ohne CLI-Kenntnisse."
keywords:
  - OneDrive to Storj migration RcloneView
  - migrate OneDrive Storj cloud
  - OneDrive Storj file transfer
  - switch OneDrive to Storj
  - decentralized cloud migration
  - Storj backup OneDrive
  - OneDrive Storj sync
  - rclone OneDrive Storj GUI
tags:
  - onedrive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive zu Storj migrieren — Dateien übertragen mit RcloneView

> Verschieben Sie Ihre OneDrive-Dateien zu Storjs dezentralem, Ende-zu-Ende-verschlüsseltem Object Storage — vollständig, verifiziert und GUI-gesteuert mit RcloneView.

Storj bietet eine interessante Alternative für Teams, die ihre Abhängigkeit von zentralisierten Cloud-Anbietern reduzieren möchten. Die dezentrale Architektur verschlüsselt Dateien und verteilt sie in Fragmenten über ein globales Netzwerk unabhängiger Knoten, was starke Datenschutzgarantien ohne Single Point of Failure bietet. Für Organisationen, die derzeit OneDrive nutzen und eine datenschutzorientierte Alternative in Betracht ziehen, macht RcloneView die Migration einfach — durch die Verbindung zu beiden Anbietern und das direkte Streamen von Daten zwischen ihnen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive und Storj mit RcloneView verbinden

Fügen Sie Microsoft OneDrive über **Remote-Tab → Neuer Remote** als Remote hinzu und schließen Sie die OAuth-Authentifizierung mit Ihrem Microsoft-Konto ab. Für Storj haben Sie zwei Optionen: Verwenden Sie den nativen Storj-Anbietertyp (geben Sie Ihren Access Grant aus der Storj-Konsole ein) oder nutzen Sie den S3-kompatiblen Zugriff (Access Key + Secret Key + Storj-S3-Endpunkt `https://gateway.storjshare.io`). Der S3-kompatible Ansatz bietet oft eine bessere Performance bei großen Massenübertragungen.

Sobald beide Remotes konfiguriert sind, öffnen Sie OneDrive im linken Panel und Ihren Storj-Bucket im rechten Panel. Überprüfen Sie, ob Sie auf beiden Seiten Dateien durchsuchen können, bevor Sie die Migration starten.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Storj as remotes in RcloneView" class="img-large img-center" />

## Die Migration durchführen

Öffnen Sie den Job-Assistenten über **Home-Tab → Sync**. Legen Sie Ihren OneDrive-Quellordner und den Storj-Zielbucket fest. Aktivieren Sie im Schritt Erweiterte Einstellungen die **Prüfsummen**-Verifizierung, um die Integrität jeder Datei nach der Übertragung zu bestätigen. Storjs verteilte Architektur bedeutet, dass jede Datei beim Herunterladen in Teile zerlegt und wieder zusammengesetzt wird — Prüfsummen bestätigen, dass dieser Prozess auf beiden Seiten identische Daten erzeugt.

Beginnen Sie mit einem **Dry Run**, um eine Vorschau der zu migrierenden Dateien zu erhalten und etwaige Pfadprobleme oder Namenskonflikte zu erkennen. OneDrive erlaubt einige Sonderzeichen in Dateinamen, die Storjs S3-kompatible Schnittstelle möglicherweise anders behandelt — die Dry-Run-Ausgabe weist auf etwaige Kodierungsprobleme hin.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Storj migration in progress in RcloneView" class="img-large img-center" />

## Übertragung überwachen und verifizieren

Der **Transferring-Tab** zeigt den Live-Übertragungsfortschritt einschließlich Übertragungsgeschwindigkeit, Dateianzahl und übertragener Bytes. Verwenden Sie bei großen Migrationen 8–16 gleichzeitige Dateiübertragungen, sofern Ihre Internetverbindung dies unterstützt.

Führen Sie nach Abschluss der Migration einen **Ordnervergleich** zwischen der OneDrive-Quelle und dem Storj-Ziel durch, um zu bestätigen, dass alle Dateien korrekt angekommen sind. Überprüfen Sie den **Job-Verlauf** auf die abschließende Übertragungszusammenfassung und den Status.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of OneDrive to Storj transfer" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie OneDrive (OAuth) und Storj (S3-kompatibel oder nativ) als Remotes hinzu.
3. Erstellen Sie einen Sync-Job mit aktivierten Prüfsummen und führen Sie zuerst einen Dry Run durch.
4. Überwachen Sie den Fortschritt im Transferring-Tab und verifizieren Sie mit Ordnervergleich.

Die Migration von OneDrive zu Storj mit RcloneView ist ein sauberer, nachvollziehbarer Prozess, der die Integrität Ihrer Daten in jeder Phase respektiert.

---

**Weiterführende Anleitungen:**

- [Storj Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [OneDrive Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Dropbox zu Storj migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)

<CloudSupportGrid />
