---
slug: fix-cloud-sync-symlink-errors-rcloneview
title: "Symlink-Fehler bei der Cloud-Synchronisation beheben — Probleme bei der Link-Übertragung mit RcloneView lösen"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Symlink-Fehler bei der Cloud-Synchronisation in RcloneView beheben — verstehen Sie, wie rclone symbolische Links verarbeitet, und konfigurieren Sie die richtigen Einstellungen, um Fehler zu vermeiden."
keywords:
  - Symlink-Fehler Cloud-Synchronisation
  - rclone Symlink
  - RcloneView Fehlerbehebung
  - copy-links-Flag
  - Cloud-Synchronisationsfehler
  - Übertragung symbolischer Links
  - rclone-Flags
  - Dateisynchronisationsfehler
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Symlink-Fehler bei der Cloud-Synchronisation beheben — Probleme bei der Link-Übertragung mit RcloneView lösen

> Symbolische Links können Cloud-Synchronisationsjobs unbemerkt zum Scheitern bringen — hier erfahren Sie, wie das Symlink-Verhalten von rclone funktioniert und wie Sie RcloneView so konfigurieren, dass es korrekt damit umgeht.

Wenn Ihre Cloud-Synchronisationsjobs mit unerwarteten Fehlern fehlschlagen oder Dateien scheinbar verschwinden, könnten symbolische Links die Ursache sein. Rclone — die Engine, die RcloneView antreibt — hat ein bestimmtes Standardverhalten für Symlinks, das viele Nutzer überrascht. Wenn Sie dieses Verhalten verstehen und wissen, welche Einstellungen in RcloneView anzupassen sind, lösen sich die meisten symlinkbedingten Synchronisationsprobleme schnell.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie rclone standardmäßig mit Symlinks umgeht

Standardmäßig folgt rclone symbolischen Links und überträgt die Datei oder das Verzeichnis, auf das der Symlink verweist — der Symlink selbst wird nicht übertragen. Das bedeutet: Wenn Sie einen Symlink haben, der auf eine große Datei an anderer Stelle in Ihrem System verweist, kopiert rclone den tatsächlichen Dateiinhalt zum Cloud-Ziel. In den meisten Fällen ist dies das gewünschte Verhalten, es kann jedoch zu Verwirrung führen, wenn das Symlink-Ziel nicht existiert, sich außerhalb des Synchronisations-Stammverzeichnisses befindet oder zirkuläre Referenzen erzeugt.

Wenn ein Symlink-Ziel fehlt oder nicht zugänglich ist, protokolliert rclone einen Fehler und überspringt den Symlink. Diese übersprungenen Dateien können in einem langen Übertragungsprotokoll leicht übersehen werden. Das **Job History**-Panel von RcloneView zeichnet diese Fehler auf — prüfen Sie daher nach Abschluss eines Jobs immer den Verlauf, um sicherzustellen, dass keine Dateien unbemerkt übersprungen wurden.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history for symlink errors in RcloneView" class="img-large img-center" />

## Verwendung des Flags --copy-links in RcloneView

Wenn Sie möchten, dass rclone Symlinks folgt und den Zielinhalt kopiert (auch wenn sich dieses Ziel außerhalb des Synchronisations-Stammverzeichnisses befindet), können Sie das Flag `--copy-links` über die Einstellung **Global Rclone Flags** von RcloneView übergeben. Öffnen Sie die RcloneView-Einstellungen, suchen Sie das Feld **Global Rclone Flags** und fügen Sie `--copy-links` hinzu. Dadurch wird rclone angewiesen, Symlinks wie reguläre Dateien zu behandeln, indem der zugrunde liegende Inhalt kopiert wird.

Verwenden Sie `--copy-links` mit Vorsicht auf Systemen, bei denen Symlinks auf sehr große Verzeichnisse verweisen, da dies die Übertragungsgröße drastisch erhöhen kann. Beachten Sie außerdem, dass manche Cloud-Anbieter Einschränkungen bei der Datei- oder Pfadlänge haben, die Probleme verursachen können, wenn der Symlink-Zielpfad lang ist.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring global rclone flags in RcloneView settings" class="img-large img-center" />

## Symlinks mit Filtern ausschließen

Eine sicherere Alternative für viele Arbeitsabläufe besteht darin, Symlinks vollständig von der Synchronisation auszuschließen. In der Job-Konfiguration von RcloneView können Sie Filterregeln hinzufügen, um symbolische Links zu überspringen. Verwenden Sie die Option `--exclude` mit Mustern, die Ihren Symlink-Namen entsprechen, oder verwenden Sie `--links`, um Symlinks als Textdateien zu kopieren (dabei wird der Link-Zielpfad statt des Inhalts gespeichert). Dieser Ansatz macht Ihre Synchronisation vorhersehbar, ohne das Risiko unerwartet großer Übertragungen.

Bei Projekten wie Software-Entwicklungs-Repositories, in denen Symlinks häufig vorkommen, ist die Kombination von Filterregeln mit einem Testlauf die beste Praxis, bevor eine echte Synchronisation ausgeführt wird. Der Testlaufmodus (Dry Run) von RcloneView zeigt genau, welche Dateien übertragen, übersprungen oder fehlerhaft wären — so haben Sie Sicherheit, bevor Sie sich auf eine vollständige Synchronisation festlegen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using filters and dry run to handle symlinks in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie nach einer fehlgeschlagenen Synchronisation **Job History**, um symlinkbezogene Fehlermeldungen zu identifizieren.
3. Gehen Sie zu den RcloneView-Einstellungen und fügen Sie `--copy-links` zu **Global Rclone Flags** hinzu, wenn der Symlink-Inhalt übertragen werden soll.
4. Fügen Sie alternativ im **Job Wizard** Filterregeln hinzu, um Symlinks vom Synchronisationsbereich auszuschließen.
5. Führen Sie einen **Testlauf (Dry Run)** durch, um das Verhalten zu überprüfen, bevor Sie eine echte Synchronisation ausführen.

Der korrekte Umgang mit Symlinks ist eines dieser kleinen Konfigurationsdetails, das einen großen Unterschied bei der Zuverlässigkeit der Synchronisation ausmacht — und RcloneView gibt Ihnen alle Werkzeuge an die Hand, um es richtig zu machen.

---

**Verwandte Anleitungen:**

- [Benutzerdefinierte Rclone-Flags und erweiterte Optionen in RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)
- [Filterregeln für die selektive Synchronisation in RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Rclone-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
