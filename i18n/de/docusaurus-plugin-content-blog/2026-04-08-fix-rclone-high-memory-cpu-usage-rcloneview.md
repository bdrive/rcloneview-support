---
slug: fix-rclone-high-memory-cpu-usage-rcloneview
title: "Hohen Speicher- und CPU-Verbrauch bei rclone-Übertragungen mit RcloneView beheben"
authors:
  - tayson
description: "Beheben Sie hohen Speicher- und CPU-Verbrauch von rclone bei Cloud-Übertragungen. Lernen Sie, Übertragungen, Checker, VFS-Cache und Puffereinstellungen mit der visuellen Oberfläche von RcloneView zu optimieren."
keywords:
  - rcloneview
  - rclone high memory usage
  - rclone cpu usage
  - rclone performance tuning
  - rclone transfers checkers
  - rclone vfs cache
  - rclone buffer size
  - cloud sync performance
  - rclone slow transfer
  - fix rclone memory
tags:
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hohen Speicher- und CPU-Verbrauch bei rclone-Übertragungen mit RcloneView beheben

> Fressen rclone-Übertragungen Ihren gesamten Arbeitsspeicher auf oder treiben sie Ihre CPU auf 100 %? **RcloneView** macht es einfach, die Ursache zu identifizieren und Performance-Einstellungen anzupassen, ohne sich Kommandozeilen-Flags merken zu müssen.

Wenn Sie bemerkt haben, dass Ihr System während Cloud-Übertragungen ins Stocken gerät, sind Sie nicht allein. Rclone ist leistungsstark, aber die Standardeinstellungen oder falsch konfigurierte Optionen können erhebliche Systemressourcen verbrauchen -- besonders bei großen Dateimengen, eingebundenen Laufwerken oder parallelen Übertragungen. Die Symptome sind bekannt: hochdrehende Lüfter, nicht mehr reagierende Anwendungen und Übertragungen, die scheinbar mehr Ressourcen verbrauchen als nötig.

Die gute Nachricht: Für die meisten Szenarien mit hohem Ressourcenverbrauch gibt es einfache Lösungen. Dieser Leitfaden führt durch die häufigsten Ursachen für übermäßigen Speicher- und CPU-Verbrauch bei rclone und zeigt, wie Sie diese mit den visuellen Konfigurationswerkzeugen von RcloneView beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige Symptome

Bevor wir uns den Lösungen widmen, hier ein Überblick, wie sich hoher Ressourcenverbrauch bei rclone-Vorgängen typischerweise äußert:

- **Hoher RAM-Verbrauch**: Der rclone-Prozess verbraucht 1 GB oder mehr Speicher, manchmal kontinuierlich wachsend, bis dem System der Speicher ausgeht.
- **CPU-Spitzen**: Ein oder mehrere CPU-Kerne laufen während Übertragungen bei 100 %, besonders beim Auflisten großer Verzeichnisse.
- **Träges System**: Andere Anwendungen frieren ein oder reagieren verzögert, während rclone läuft.
- **Fehlgeschlagene Übertragungen**: Speicherfehler (Out-of-Memory) führen zum unerwarteten Abbruch von Übertragungen.
- **Langsame Performance**: Paradoxerweise können zu viele parallele Vorgänge alles verlangsamen, da sie sich gegenseitig Ressourcen streitig machen.

## Zu viele gleichzeitige Übertragungen und Checker

Die häufigste Ursache für hohen Ressourcenverbrauch ist die Ausführung zu vieler paralleler Übertragungen und Checker. Rclone verwendet standardmäßig 4 Übertragungen und 8 Checker, aber Nutzer erhöhen diese Werte oft in der Annahme, dass es dadurch schneller geht. 32 oder 64 gleichzeitige Übertragungen können sowohl Ihr System als auch Ihre Netzwerkverbindung überlasten.

**So beheben Sie es in RcloneView:**

Setzen Sie beim Erstellen oder Bearbeiten eines Synchronisationsjobs das Flag `--transfers` auf einen vernünftigen Wert. Beginnen Sie mit 4 und erhöhen Sie nur, wenn Ihre Bandbreite und Ihr System dies zulassen. Setzen Sie `--checkers` auf 8 oder niedriger. Für die meisten Heimverbindungen bieten 2-4 Übertragungen und 4-8 Checker die richtige Balance zwischen Geschwindigkeit und Ressourcenverbrauch.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Große Dateilisten und Verzeichnisscans

Wenn rclone Verzeichnisse mit Hunderttausenden oder Millionen von Dateien scannt, erstellt es eine Liste jeder Datei samt Metadaten im Arbeitsspeicher. Das kann bei sehr großen Verzeichnissen mehrere Gigabyte RAM beanspruchen.

**So beheben Sie es:**

- Verwenden Sie `--fast-list`, sofern unterstützt. Dieses Flag ruft Verzeichnislisten mit weniger API-Aufrufen ab, was bei manchen Anbietern (wie S3) den Speicherverbrauch tatsächlich reduzieren kann, bei anderen jedoch erhöht. Testen Sie es mit Ihrem konkreten Anbieter.
- Teilen Sie große Synchronisationsjobs in kleinere Abschnitte auf, indem Sie gezielt einzelne Unterverzeichnisse ansprechen, statt ein ganzes Cloud-Konto auf einmal zu synchronisieren.
- Verwenden Sie Filterregeln (`--include`, `--exclude`), um den Umfang jedes Synchronisationsvorgangs zu begrenzen. Weniger aufzulistende Dateien bedeuten weniger Speicherverbrauch.

## VFS-Cache-Aufblähung bei eingebundenen Laufwerken

Wenn Sie Cloud-Speicher als lokales Laufwerk einbinden, kann der VFS-Cache (Virtual File System) erheblich wachsen. Standardmäßig cacht rclone unter Umständen große Datenmengen, um eine flüssige Lese-/Schreibperformance auf eingebundenen Laufwerken zu bieten. Mit der Zeit kann dieser Cache erheblichen Speicherplatz und Arbeitsspeicher beanspruchen.

**So beheben Sie es:**

- Setzen Sie `--vfs-cache-max-size` auf ein vernünftiges Limit, etwa `1G` oder `5G`, je nach verfügbaren Ressourcen.
- Setzen Sie `--vfs-cache-max-age`, um alte zwischengespeicherte Dateien automatisch zu bereinigen. Ein Wert wie `1h` oder `4h` funktioniert für die meisten Arbeitsabläufe gut.
- Wählen Sie den richtigen `--vfs-cache-mode`. Verwenden Sie `minimal` oder `writes` statt `full`, wenn Sie nur Lesezugriff oder gelegentliche Schreibvorgänge benötigen. Der volle Cache-Modus cacht ganze Dateien, bevor sie zugänglich sind, was den meisten Speicher und Plattenplatz beansprucht.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Falsch konfigurierte Puffergröße

Das Flag `--buffer-size` steuert, wie viel Speicher rclone pro Datei für die Pufferung während der Übertragung reserviert. Der Standardwert liegt bei 16 MB pro Übertragung. Bei 16 gleichzeitigen Übertragungen sind das allein 256 MB Puffer-Speicher. Eine Erhöhung von `--buffer-size` auf 256 MB bei 16 Übertragungen würde allein für Puffer 4 GB verbrauchen.

**So beheben Sie es:**

- Belassen Sie `--buffer-size` beim Standardwert `16M`, sofern Sie keinen konkreten Grund für eine Erhöhung haben.
- Falls Sie den Wert für große Dateiübertragungen erhöht haben, reduzieren Sie `--transfers` entsprechend, um innerhalb Ihres verfügbaren RAM zu bleiben.
- Bei Systemen mit begrenztem RAM (4 GB oder weniger) sollten Sie erwägen, `--buffer-size` auf `8M` oder sogar `4M` zu reduzieren.

## Mount-Overhead und FUSE-Vorgänge

Eingebundene Laufwerke erzeugen zusätzlichen CPU-Overhead, da jeder Dateivorgang (Öffnen, Lesen, Schreiben, Stat) über die FUSE-Schicht läuft und API-Aufrufe auslöst. Anwendungen, die aggressiv Verzeichnisse scannen -- wie Antivirensoftware, Thumbnail-Generatoren oder Suchindexierer -- können auf eingebundenen Laufwerken kontinuierlich CPU- und API-Verbrauch verursachen.

**So beheben Sie es:**

- Schließen Sie Pfade eingebundener Laufwerke vom Antiviren-Scan aus.
- Deaktivieren Sie die Thumbnail-Generierung für eingebundene Laufwerke in den Einstellungen Ihres Datei-Explorers.
- Verwenden Sie `--dir-cache-time`, um die Dauer zu erhöhen, für die Verzeichnislisten zwischengespeichert werden (z. B. `5m` oder `30m`), um wiederholte API-Aufrufe zu reduzieren.
- Setzen Sie `--attr-timeout`, um Dateiattribute länger zu cachen, was Stat-Aufrufe reduziert.
- Wenn Sie Dateien nur lesen müssen, verwenden Sie `--read-only`, um schreibbezogenen Overhead zu vermeiden.

## Ressourcenverbrauch in RcloneView überwachen

RcloneView bietet eine Echtzeit-Übertragungsüberwachung, mit der Sie erkennen können, wann Ressourcen übermäßig beansprucht werden. Während einer aktiven Übertragung können Sie Übertragungsgeschwindigkeiten, Dateianzahl und Gesamtfortschritt beobachten. Wenn die Geschwindigkeit sinkt oder die Oberfläche träge wird, ist das ein Zeichen, die Parallelität zu reduzieren.

Nutzen Sie die Jobverlauf-Ansicht, um vergangene Übertragungen zu überprüfen und Muster zu erkennen. Wenn bestimmte Jobs konstant länger dauern oder fehlschlagen, sind das Kandidaten für eine Optimierung.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Kurzreferenz: Empfohlene Einstellungen

| Einstellung | Ressourcenschwaches System | Standardsystem | Hochleistungssystem |
|---|---|---|---|
| `--transfers` | 2 | 4 | 8-16 |
| `--checkers` | 4 | 8 | 16 |
| `--buffer-size` | 4M | 16M | 32M |
| `--vfs-cache-max-size` | 512M | 2G | 10G |
| `--vfs-cache-mode` | minimal | writes | full |

Passen Sie diese Werte basierend auf Ihrem verfügbaren RAM, Ihren CPU-Kernen und Ihrer Internetbandbreite an. Beginnen Sie zurückhaltend und erhöhen Sie schrittweise.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie einen bestehenden Synchronisationsjob oder erstellen Sie einen neuen und überprüfen Sie die Übertragungs- und Checker-Einstellungen.
3. Reduzieren Sie `--transfers` und `--checkers`, falls Ihr System während Übertragungen an seine Grenzen stößt.
4. Konfigurieren Sie bei eingebundenen Laufwerken VFS-Cache-Limits, um unbegrenztes Speicherwachstum zu verhindern.

Kleine Anpassungen an Parallelität und Cache-Einstellungen können die Reaktionsfähigkeit des Systems drastisch verbessern, ohne die Übertragungsgeschwindigkeit nennenswert zu beeinträchtigen.

---

**Weiterführende Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Echtzeit-Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
