---
slug: fix-mount-stale-files-dir-cache-rcloneview
title: "Mount zeigt veraltete Dateien — Dir Cache Time in RcloneView erklärt"
authors:
  - morgan
description: "Beheben Sie veraltete oder fehlende Dateien in einem gemounteten Cloud-Laufwerk in RcloneView, indem Sie Dir cache time und VFS cache mode richtig einstellen."
keywords:
  - Mount zeigt alte Dateien
  - RcloneView dir cache time
  - veraltete Dateien im gemounteten Laufwerk
  - veraltete Mount-Liste beheben
  - Cloud-Laufwerk aktualisiert sich nicht
  - VFS cache mode Fehlkonfiguration
  - RcloneView Mount-Fehlerbehebung
  - Verzeichniscache beim Cloud-Mount
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mount zeigt veraltete Dateien — Dir Cache Time in RcloneView erklärt

> Ein gemountetes Cloud-Laufwerk, das noch eine gelöschte Datei anzeigt oder eine brandneue verbirgt, ist meist nicht defekt — sein Verzeichnis-Cache ist einfach noch nicht abgelaufen. So beheben Sie das in RcloneView.

Wenn Sie ein Remote als lokales Laufwerk mounten, listet RcloneView nicht bei jedem Klick jeden Ordner neu auf — es hält einen kurzlebigen Verzeichnis-Cache, damit sich das Durchsuchen sofort anfühlt, statt bei jedem Tastendruck zum Cloud-Anbieter hin- und zurückzugehen. Das ist gut für die Geschwindigkeit, bedeutet aber, dass Änderungen von einem anderen Gerät, einem anderen RcloneView-Fenster oder der eigenen Web-App des Anbieters einen Moment brauchen können, bis sie im gemounteten Ordner erscheinen. Diese Anleitung erklärt, wann diese Verzögerung normal ist und wie man sie anpasst, wenn sie es nicht ist.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dir Cache Time verstehen

Die Mount-Konfiguration von RcloneView enthält eine Einstellung **Dir cache time**, die steuert, wie lange eine Ordnerauflistung gültig bleibt, bevor der Mount das Remote erneut auf Änderungen prüft. Das ist etwas anderes als die VFS-Einstellung **Cache mode** (off / minimal / writes / full), die die Zwischenspeicherung von Dateiinhalten und nicht der Ordnerstruktur regelt. Eine kurze Dir cache time bedeutet, dass der Mount Änderungen am Remote fast sofort widerspiegelt, aber mehr Listenaufrufe an den Anbieter sendet; eine lange Dir cache time reduziert die API-Aufrufe, verlängert aber die Verzögerung, bis neue oder gelöschte Dateien erscheinen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount-Konfigurationsoptionen einschließlich Dir cache time in RcloneView" class="img-large img-center" />

Wenn Sie ein Remote mounten, auf das mehrere Personen oder Geräte gleichzeitig schreiben — zum Beispiel einen gemeinsamen Google Drive-Ordner —, kann das Standard-Cache-Fenster den Eindruck erwecken, RcloneView habe eine Datei "verpasst", die tatsächlich erst vor Sekunden von einem anderen Ort hinzugefügt wurde. Es wurde nichts verpasst; der Mount hat die Auflistung dieses Ordners nur noch nicht aktualisiert.

## Einen Mount reparieren, der keine neuen Dateien zeigt

Aktualisieren Sie zunächst manuell, bevor Sie von einem echten Problem ausgehen. Im Explorer-Panel oder im auf den Mount zeigenden Dateibrowser des Betriebssystems bringt ein erzwungenes Neuladen des Ordners (F5 oder aus dem Verzeichnis heraus- und wieder hineinnavigieren) Änderungen oft sofort zum Vorschein, ohne auf den Ablauf des Caches zu warten. Wenn Dateien nach einer manuellen Aktualisierung immer noch nicht erscheinen, muss der Mount möglicherweise über den **Mount Manager** aus- und wieder eingehängt werden, da ein hängengebliebener rclone-VFS-Prozess gelegentlich eine noch ältere Auflistung vorhalten kann, als die konfigurierte Dir cache time vermuten lässt.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Aktualisieren einer gemounteten Remote-Ordnerauflistung in RcloneView" class="img-large img-center" />

Für Remotes, bei denen nahezu Echtzeit-Sichtbarkeit wichtiger ist als reine API-Effizienz, senken Sie den Wert der Dir cache time in den Edit-Einstellungen des Mounts, bevor Sie speichern und erneut mounten. Hier gibt es einen Kompromiss: Wird dieser Wert bei einem stark genutzten Remote zu aggressiv niedrig eingestellt, erhöht das die Anzahl der Listenanfragen, die RcloneView sendet, was bei Diensten, die die API-Aufrufe pro Minute begrenzen, anbieterseitige Ratenlimits auslösen kann.

## Cache Mode gemeinsam mit Dir Cache Time wählen

Dir cache time und VFS Cache mode lösen unterschiedliche Probleme, daher bleibt das zugrunde liegende Problem oft nur halb gelöst, wenn man das eine prüft, ohne das andere zu berücksichtigen. Wenn gelöschte Dateien im Mount weiterhin als zugänglich angezeigt werden (statt dass neue Dateien nicht erscheinen), ist das eher ein Symptom des Cache Mode — das Standardverhalten **writes** speichert kürzlich geschriebene Dateiinhalte lokal zwischen, während **full** auch gelesene Inhalte zwischenspeichert, und in beiden Fällen kann eine lokal zwischengespeicherte Kopie den aktuellen Stand des Remotes überleben, bis der Cache validiert wird. Eine kürzere Dir cache time in Kombination mit einem zur tatsächlichen Nutzung des Remotes passenden Cache Mode löst die meisten Probleme mit veralteten Auflistungen.

<img src="/support/images/en/blog/new-remote.png" alt="Anpassen der Mount-Cache-Einstellungen für ein Remote in RcloneView" class="img-large img-center" />

RcloneView mountet und synchronisiert im selben Fenster unter Windows, macOS und Linux mehr als 90 Anbieter, sodass diese Cache-Einstellungen unabhängig davon gleich funktionieren, ob der Mount auf Google Drive, einen S3-Bucket oder einen selbst gehosteten WebDAV-Server zeigt.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den **Mount Manager**, wählen Sie den betroffenen Mount aus und prüfen Sie den aktuellen Wert der Dir cache time.
3. Senken Sie die Dir cache time für Remotes, die sich häufig aus mehreren Quellen ändern, und hängen Sie sie aus und wieder ein, um es anzuwenden.
4. Überprüfen Sie auch die Cache-Mode-Einstellung, wenn nicht nur veraltete Auflistungen, sondern veralteter Datei*inhalt* das eigentliche Symptom ist.

Ein Mount, der die Cloud genau widerspiegelt, in einem Rhythmus, der der tatsächlichen Nutzung des Remotes entspricht, ist jedem "Warum synchronisiert das nicht"-Rätselraten überlegen.

---

**Verwandte Anleitungen:**

- [VFS Cache — Mount-Leistung von Cloud-Laufwerken in RcloneView verbessern](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [VFS Cache-Fehler „Datenträger voll" beheben — Mount-Cache mit RcloneView verwalten](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Rclone-Mount- und FUSE-Fehler in RcloneView beheben](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
