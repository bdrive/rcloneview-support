---
slug: migrate-seafile-to-backblaze-b2-rcloneview
title: "Seafile zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView"
authors:
  - steve
description: "Verschieben Sie Bibliotheken vom selbst gehosteten Seafile zu Backblaze B2 mit RcloneView, einer plattformübergreifenden GUI für zuverlässige Cloud-zu-Cloud-Übertragungen."
keywords:
  - seafile zu backblaze b2 migrieren
  - seafile backblaze b2 migration
  - seafile cloud-backup
  - migration von selbst gehostet zu cloud
  - backblaze b2 gui
  - rcloneview seafile
  - plattformübergreifende dateiübertragung
  - seafile bibliothek sichern
tags:
  - RcloneView
  - seafile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seafile zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView

> Verschieben Sie Ihre selbst gehosteten Seafile-Bibliotheken in den Backblaze B2 Objektspeicher, ohne die Kommandozeile anzufassen.

Teams, die Seafile auf eigener Hardware oder einem privaten Server betreiben, stoßen irgendwann an eine Grenze: lokale Festplatten laufen voll, die Serverwartung wird zur Belastung, oder ein Projekt benötigt eine externe Kopie zur Notfallwiederherstellung. Backblaze B2 bietet ein kostengünstiges, langlebiges Ziel für diese Daten, aber die Übertragung zwischen einer selbst gehosteten Sync-Plattform und Objektspeicher zu koordinieren, ist etwas, das die meisten Dateimanager nicht gut beherrschen. RcloneView verbindet sich mit Seafile und Backblaze B2 gleichzeitig als Remotes im selben Fenster und lässt Sie Bibliotheken direkt durchsuchen, vergleichen und verschieben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Seafile und Backblaze B2 als Remotes verbinden

Seafile wird wie jedes andere Remote zu RcloneView hinzugefügt und liefert Ihnen eine durchsuchbare Dateiliste Ihrer Bibliotheken zusammen mit dem Ordnerbaum und der Breadcrumb-Pfadleiste. Backblaze B2 erfordert eine Application Key ID und einen Application Key, die direkt bei der Erstellung des Remotes eingegeben werden — keine OAuth-Weiterleitung, kein separates CLI-Setup. Beide Remotes werden als Tabs angezeigt, und Sie können Seafile in einem Panel und Ihren B2-Bucket in einem anderen öffnen, mit horizontaler oder vertikaler Aufteilung.

Im Gegensatz zu reinen Mount-Tools synchronisiert und vergleicht RcloneView auch Ordner — bereits mit der FREE-Lizenz, sodass Sie sich für eine einmalige Übertragung nicht nur auf einfaches Drag & Drop verlassen müssen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote alongside Seafile in RcloneView" class="img-large img-center" />

Sobald beide Remotes sichtbar sind, nutzen Sie Drag & Drop zwischen den Panels für kleinere Bibliotheken, oder richten Sie einen Sync-Job für größere, laufende Übertragungen ein, die Wiederholungsversuche und Filterung benötigen.

## Die Migration als Sync-Job ausführen

Für eine vollständige Bibliotheksmigration konfigurieren Sie einen Sync-Job mit Seafile als Quelle und Ihrem Backblaze B2 Bucket als Ziel. Der 4-stufige Assistent lässt Sie die Anzahl gleichzeitiger Dateiübertragungen und die Anzahl der Multithread-Übertragungen festlegen, was wichtig ist, wenn Tausende kleiner Dateien verschoben werden, wie sie in gemeinsam genutzten Dokumentbibliotheken typisch sind. Die Aktivierung des Checksum-Vergleichs stellt sicher, dass Dateien anhand von Hash und Größe überprüft werden, statt nach einem einzigen Durchlauf einfach als korrekt angenommen zu werden.

Bevor Sie sich auf die Übertragung festlegen, führen Sie einen Dry Run aus, um genau vorzusehen, welche Dateien kopiert werden. Das ist besonders nützlich bei der Migration einer Bibliothek, die seit Jahren aktiv genutzt wird, da es veraltete oder unerwartet große Dateien aufdeckt, bevor sie B2-Speicher verbrauchen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Seafile to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

## Übertragung filtern und überprüfen

Seafile-Bibliotheken vermischen häufig Dokumenttypen, temporäre Dateien und Artefakte aus der Versionshistorie, die Sie nicht doppelt in B2 haben möchten. Die Filtereinstellungen von RcloneView lassen Sie nach Dateityp, Pfad oder Alter ausschließen — zum Beispiel `.git/`-Ordner in code-nahen Bibliotheken überspringen oder alles ausschließen, das älter als eine festgelegte Anzahl von Jahren ist, bei einer Archiv-Migration. Benutzerdefinierte Filter verwenden einfache Muster wie `.iso` für den Ausschluss von Dateiendungen oder `/.git/*` für den Ausschluss von Pfaden auf Root-Ebene.

Nach Abschluss des Jobs zeichnet die Job History Ausführungstyp, Dauer, Gesamtgröße, Übertragungsgeschwindigkeit und Dateianzahl auf und liefert Ihnen einen Nachweis, auf den Sie sich beziehen können, falls ein Stakeholder fragt, ob die Migration erfolgreich abgeschlossen wurde.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Seafile to Backblaze B2 migration" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren Seafile-Server mit Ihren Kontoanmeldedaten als Remote hinzu.
3. Erstellen Sie ein Backblaze B2 Remote mit Ihrer Application Key ID und Ihrem Application Key.
4. Richten Sie einen Sync-Job von Seafile zu B2 ein, führen Sie einen Dry Run aus, dann ausführen und in der Job History bestätigen.

Der Abschied von selbst gehosteter Infrastruktur muss nicht bedeuten, Ihren Workflow von Grund auf neu aufzubauen — mit beiden Endpunkten in einem Explorer wird die Migration zu einem einzigen nachverfolgbaren Job.

---

**Weitere Anleitungen:**

- [Dezentrale Storj-Cloud-Synchronisierung verwalten](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [Nextcloud mit Backblaze B2 synchronisieren](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Seafile-Synchronisierungsfehler beheben](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
