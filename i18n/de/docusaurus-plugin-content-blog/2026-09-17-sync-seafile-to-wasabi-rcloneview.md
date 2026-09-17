---
slug: sync-seafile-to-wasabi-rcloneview
title: "Seafile mit Wasabi synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - kai
description: "Synchronisieren Sie eine selbst gehostete Seafile-Bibliothek mit dem S3-kompatiblen Speicher Wasabi über RcloneView. Halten Sie eine externe Kopie, ohne Dateien manuell zu exportieren."
keywords:
  - Seafile mit Wasabi synchronisieren
  - Seafile Backup
  - Wasabi Cloud-Synchronisation
  - Selbst gehostetes Cloud-Backup
  - Seafile RcloneView
  - Wasabi S3-kompatibler Speicher
  - Cloud-zu-Cloud-Synchronisation
  - Externes Backup selbst gehostet
  - RcloneView Seafile
  - RcloneView Wasabi
tags:
  - RcloneView
  - seafile
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seafile mit Wasabi synchronisieren — Cloud-Backup mit RcloneView

> Verschaffen Sie einer selbst gehosteten Seafile-Bibliothek ein externes Backup auf Wasabi, ohne ein einziges Synchronisationsskript zu schreiben.

Seafile ist eine beliebte Wahl für Teams, die ihre Dateisynchronisationsplattform auf dem eigenen Server betreiben möchten, aber Self-Hosting bedeutet auch, dass die Backup-Strategie vollständig in der eigenen Verantwortung liegt — fällt die Server-Festplatte aus, geht auch die einzige Kopie verloren. Wasabi ist ein naheliegendes externes Ziel: S3-kompatibel, im großen Maßstab erschwinglich und von überall erreichbar. RcloneView verbindet sich direkt mit beiden, sodass eine Seafile-Bibliothek nach Zeitplan in einen Wasabi-Bucket gespiegelt werden kann, statt sich auf manuelle Exporte zu verlassen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Seafile und Wasabi als Remotes verbinden

Fügen Sie zunächst Ihren Seafile-Server als Remote hinzu und lassen Sie RcloneView auf Ihre Server-URL und die Bibliotheks-Zugangsdaten zeigen. Fügen Sie Wasabi separat hinzu, mit Ihrer Access Key ID, dem Secret Access Key und dem passenden Wasabi-Regionsendpunkt. Sobald beide Remotes eingerichtet sind, erscheinen sie als durchsuchbare Dateibäume in den Explorer-Panels, sodass Sie Bibliotheksstruktur und Dateianzahl prüfen können, bevor Sie einen Sync-Job einrichten. RcloneView bindet ein und synchronisiert 90+ Anbieter aus einem einzigen Fenster unter Windows, macOS und Linux, sodass Seafile und Wasabi neben allen bereits eingerichteten Clouds bestehen können.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Seafile- und Wasabi-Remotes in RcloneView" class="img-large img-center" />

## Einen unidirektionalen Sync-Job erstellen

Konfigurieren Sie einen Sync-Job mit Ihrer Seafile-Bibliothek als Quelle und einem Wasabi-Bucket als Ziel, unter Verwendung von „Nur Ziel ändern", damit Wasabi ein reiner Spiegel bleibt, der niemals in Seafile zurückschreibt. Für ein Design-Team mit einer 500-GB-Bibliothek aus Quelldateien und Exporten lässt der Filtering-Schritt Sie temporäre Dateien und Sperrdateien ausschließen, die Seafile intern erzeugt, damit die Wasabi-Kopie sauber bleibt statt mit Synchronisationsartefakten überladen zu werden.

Aktivieren Sie den Prüfsummenvergleich in den Advanced Settings, damit Dateien anhand von Hash und Größe statt nur des Änderungsdatums abgeglichen werden — nützlich, da Seafile und S3-kompatibler Speicher Datei-Metadaten unterschiedlich verfolgen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Synchronisation einer Seafile-Bibliothek mit einem Wasabi-Bucket mit RcloneView" class="img-large img-center" />

Führen Sie vor der ersten echten Synchronisation einen Dry Run aus. Er listet genau auf, was übertragen würde, ohne Daten zu bewegen — besonders wichtig beim ersten Durchlauf, wenn Sie noch nicht wissen, wie groß die Bibliothek tatsächlich ist.

## Das Backup planen und überprüfen

Hängen Sie mit einer PLUS-Lizenz einen Crontab-artigen Zeitplan an den Job an, damit er automatisch erneut ausgeführt wird — nächtlich für eine aktiv genutzte Bibliothek, wöchentlich für etwas eher Archivartiges. Job History erfasst Dauer, Übertragungsgeschwindigkeit und Status jedes Laufs und liefert so ein klares Protokoll darüber, wann die Wasabi-Kopie zuletzt aktualisiert wurde.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen eines wiederkehrenden Seafile-zu-Wasabi-Sync-Jobs in RcloneView" class="img-large img-center" />

Führen Sie nach der ersten vollständigen Synchronisation Folder Compare zwischen der Seafile-Quelle und dem Wasabi-Ziel aus, um zu bestätigen, dass jede Datei angekommen ist und in der Größe übereinstimmt — eine schnelle Methode, um alles zu erkennen, was bei einer Netzwerkunterbrechung verloren gegangen sein könnte.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren Seafile-Server mit Server-URL und Bibliotheks-Zugangsdaten als Remote hinzu.
3. Fügen Sie Wasabi mit Ihrer Access Key ID, dem Secret Access Key und dem Regionsendpunkt als Remote hinzu.
4. Erstellen Sie einen unidirektionalen Sync-Job, führen Sie einen Dry Run aus und planen Sie dann wiederkehrende Läufe, um das Backup aktuell zu halten.

Eine selbst gehostete Bibliothek bleibt nur sicher, wenn sie auch anderswo existiert, und eine geplante Seafile-zu-Wasabi-Synchronisation macht daraus etwas, das von selbst läuft.

---

**Verwandte Anleitungen:**

- [Selbst gehostete Seafile-Cloud-Synchronisation mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [Wasabi-Cloud-Synchronisation und -Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Seafile mit RcloneView zu Backblaze B2 migrieren](https://rcloneview.com/support/blog/migrate-seafile-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
