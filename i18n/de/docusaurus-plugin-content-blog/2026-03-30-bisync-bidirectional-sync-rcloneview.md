---
slug: bisync-bidirectional-sync-rcloneview
title: "Bisync bidirektionale Synchronisation — Zwei-Wege-Cloud-Synchronisation in RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie mit RcloneViews bidirektionaler Bisync-Synchronisation lokale und Cloud-Dateien geräte- und anbieterübergreifend in einer Zwei-Wege-Synchronisation halten."
keywords:
  - bisync rcloneview
  - bidirektionale Synchronisation
  - Zwei-Wege-Cloud-Synchronisation
  - rclone bisync
  - Cloud-Dateisynchronisation
  - Zwei-Wege-Dateisynchronisation
  - Bisync-Einrichtung
  - rcloneview Synchronisation
  - Multi-Geräte-Synchronisation
  - bidirektionales Backup
tags:
  - feature
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync bidirektionale Synchronisation — Zwei-Wege-Cloud-Synchronisation in RcloneView

> Bisync überträgt Änderungen in beide Richtungen und hält Ihre lokalen Dateien und Ihren Cloud-Speicher perfekt gespiegelt, ohne eine Seite zu überschreiben.

Standard-Synchronisationsvorgänge sind einseitig: Sie gleichen das Ziel an die Quelle an und löschen alles am Ziel, was an der Quelle nicht existiert. Bisync funktioniert anders. Es verfolgt Änderungen auf beiden Seiten seit dem letzten Lauf und überträgt Hinzufügungen, Änderungen und Löschungen in beide Richtungen. RcloneView macht die Bisync-Funktion von rclone über seine grafische Oberfläche zugänglich und ermöglicht so eine Zwei-Wege-Cloud-Synchronisation, ohne Kommandozeilenskripte schreiben zu müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie Bisync funktioniert

Der Bisync-Befehl von rclone verwaltet ein Paar von Listendateien, die nach jedem erfolgreichen Lauf den Zustand sowohl der Quelle (Path1) als auch des Ziels (Path2) festhalten. Bei nachfolgenden Läufen vergleicht Bisync den aktuellen Zustand jeder Seite mit der gespeicherten Liste, um zu bestimmen, was sich geändert hat. Neue Dateien auf Path1 werden nach Path2 kopiert, neue Dateien auf Path2 werden nach Path1 kopiert, und Löschungen werden in beide Richtungen gespiegelt.

Eine Konflikterkennung ist eingebaut. Wird dieselbe Datei zwischen den Läufen auf beiden Seiten geändert, markiert Bisync dies als Konflikt, anstatt eine Version stillschweigend zu überschreiben. Das Standardverhalten benennt die widersprüchliche Kopie um und bewahrt so beide Versionen, damit Sie den Unterschied manuell auflösen können. Dies ist entscheidend für gemeinsame Arbeitsabläufe, bei denen mehrere Benutzer oder Geräte dasselbe Dokument bearbeiten können.

Der erste Bisync-Lauf erfordert das Flag `--resync`, um die anfänglichen Referenzlisten zu erstellen. RcloneView erledigt dies automatisch, wenn Sie einen neuen Bisync-Job erstellen — der erste Lauf führt einen Resync durch, und alle nachfolgenden geplanten Läufe arbeiten im normalen Delta-Modus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Bisync bidirectional transfer configuration in RcloneView" class="img-large img-center" />

## Bisync in RcloneView einrichten

Um einen Bisync-Job in RcloneView zu erstellen, öffnen Sie den Job-Manager und wählen Sie Bisync als Vorgangstyp. Wählen Sie Ihre zwei Pfade — zum Beispiel ein lokales Verzeichnis wie `/home/user/Documents` als Path1 und einen Google-Drive-Ordner als Path2. Sie können auch zwischen zwei Cloud-Remotes bisync durchführen, etwa um einen Dropbox-Ordner mit OneDrive gespiegelt zu halten.

Filterregeln funktionieren bei Bisync genauso wie bei der Standard-Synchronisation. Verwenden Sie Include- und Exclude-Muster, um Bisync auf bestimmte Dateitypen oder Unterverzeichnisse zu beschränken. Sie könnten beispielsweise nur `*.docx`- und `*.xlsx`-Dateien zwischen einem lokalen Projektordner und einem gemeinsamen OneDrive-Verzeichnis synchronisieren und dabei temporäre Dateien und OS-Metadaten ignorieren.

Der Job-Scheduler von RcloneView unterstützt die Ausführung von Bisync in regelmäßigen Intervallen — alle 15 Minuten, stündlich oder nach einem benutzerdefinierten Cron-Zeitplan. Häufige Intervalle minimieren das Zeitfenster für Konflikte und gewährleisten eine nahezu echtzeitnahe Synchronisation zwischen Ihrem lokalen Rechner und dem Cloud-Speicher.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a bisync job from the RcloneView job manager" class="img-large img-center" />

## Praktische Anwendungsfälle für Bisync

**Dokumentensynchronisation über mehrere Geräte:** Halten Sie einen Arbeitsdokumentenordner zwischen Ihrem Desktop und dem Cloud-Speicher synchronisiert. Wenn Sie eine Datei auf Ihrem Laptop bearbeiten (der über einen eigenen Bisync-Job mit demselben Cloud-Ordner synchronisiert), werden die Änderungen beim nächsten Lauf an alle verbundenen Geräte weitergegeben.

**Gemeinsame Projektordner:** Teams, die einen Cloud-Speicherordner gemeinsam nutzen, können mit Bisync lokale Arbeitskopien pflegen. Die lokalen Änderungen jedes Teammitglieds werden in die Cloud übertragen, und entfernte Änderungen von Kollegen werden automatisch heruntergeladen. Die Konflikterkennung stellt sicher, dass gleichzeitige Bearbeitungen sich nicht stillschweigend gegenseitig überschreiben.

**Hybride lokale/Cloud-Workflows:** Entwickler oder Designer, die schnellen lokalen Dateizugriff benötigen, aber auch ein Cloud-Backup wünschen, können ihre Projektverzeichnisse per Bisync synchronisieren. Lokale Dateioperationen bleiben sofort verfügbar, während die Cloud-Kopie für Backup- und Freigabezwecke aktuell bleibt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring bisync job in RcloneView" class="img-large img-center" />

## Best Practices für Bisync

Führen Sie Bisync nach einem konsistenten Zeitplan aus, um Konflikte zu minimieren. Je länger das Intervall zwischen den Läufen, desto höher die Wahrscheinlichkeit widersprüchlicher Bearbeitungen. Für aktive Arbeitsverzeichnisse bietet ein Intervall von 15 bis 30 Minuten eine gute Balance zwischen Reaktionsfähigkeit und Ressourcennutzung. Vermeiden Sie es, Bisync ohne Filter auf extrem großen Verzeichnisbäumen auszuführen, da der Listenvergleich zeitaufwendig sein kann. Nutzen Sie den Job-Verlauf von RcloneView, um wiederkehrende Konflikte zu erkennen und Ihren Workflow entsprechend anzupassen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Bisync job history showing completed two-way synchronization runs" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Konfigurieren Sie Ihre Quell- und Ziel-Remotes (lokaler Ordner, Google Drive, OneDrive usw.).
3. Erstellen Sie einen neuen Bisync-Job im Job-Manager und führen Sie den anfänglichen Resync aus.
4. Planen Sie den Bisync-Job so, dass er in Ihrem bevorzugten Intervall für eine fortlaufende Zwei-Wege-Synchronisation läuft.

Bisync in RcloneView bringt echte bidirektionale Cloud-Synchronisation auf Ihren Desktop — ohne Skripte, Cron-Jobs oder Kommandozeilen-Komplexität.

---

**Verwandte Anleitungen:**

- [Sync, Copy, Move — Der Unterschied erklärt in RcloneView](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Filterregeln und selektive Synchronisation in RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView vs Syncthing — Vergleich](https://rcloneview.com/support/blog/rcloneview-vs-syncthing-comparison)

<CloudSupportGrid />
