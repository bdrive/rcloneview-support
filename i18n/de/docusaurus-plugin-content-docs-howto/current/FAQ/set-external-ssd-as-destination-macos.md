---
sidebar_position: 3
description: "Beheben Sie Fälle, in denen RcloneView nicht auf Ihre externe SSD unter macOS zugreifen kann, indem Sie /Volumes durchsuchen und eine schnelle Alias-Verknüpfung erstellen."
keywords:
  - rcloneview
  - macos
  - external drive
  - offline backup
  - sync destination
  - alias remote
  - volumes
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - external-drive
  - alias
date: 2025-02-20
author: Jay
---

# Ich kann mit RcloneView nicht auf eine externe SSD zugreifen (macOS)

Wenn RcloneView nicht auf Ihre externe SSD unter macOS zugreifen kann (Sie sehen das Laufwerk nicht oder wissen nicht, wo Sie den Pfad eingeben sollen), verwenden Sie diesen schnellen Workaround. Ein vorübergehendes UX-Problem (behoben im nächsten Release) verbirgt die übliche Verknüpfung, aber Sie können manuell zur SSD navigieren und sie als Alias (Favorit) für den späteren Ein-Klick-Zugriff speichern.

---

## Schnelle Lösungsoptionen (eine auswählen)

- **Den Hotfix-Build verwenden (enthält die UX-Korrektur):** [RcloneView 1.1.517 (macOS) herunterladen](https://downloads.bdrive.com/rclone_view/builds/RcloneView-1.1.517.dmg) und installieren, um die SSD-Pfad-Korrektur sofort zu erhalten. Dies ist ein temporärer Build für Benutzer, die auf dieses Problem stoßen, bevor das nächste offizielle Release erscheint.
- **Bei der aktuellen offiziellen Version bleiben:** Folgen Sie den manuellen Schritten unten, um `/Volumes` zu durchsuchen und einen Alias für Ihre SSD zu erstellen. Dies funktioniert im aktuellen öffentlichen Build.

---

## Schritt für Schritt: Ihre SSD aus /Volumes hinzufügen

Sie sehen **`Local Disk`** im linken Bereich von RcloneView.

1) Geben Sie in der Pfadleiste `/Volumes` ein und drücken Sie **Enter**. Hier bindet macOS externe Laufwerke ein (z. B. Samsung T7).
2) Doppelklicken Sie in der `/Volumes`-Liste auf Ihre SSD (z. B. `SAMSUNG`). Manche Laufwerke benötigen einen Moment zum Laden – warten Sie, bis sich der Ordner öffnet.

<img src="/support/images/en/howto/FAQ/browse-volumes-in-mac-system.png" alt="browse volumes in mac system" class="img-large img-center" />

3) Bestätigen Sie, dass Sie sich innerhalb der SSD befinden (die Pfadleiste sollte `/Volumes/<Ihr-Laufwerk>` anzeigen).
4) Klicken Sie auf das **☆**-Symbol (Alias) in der Pfadleiste, um diesen Ort als Lesezeichen zu speichern.
5) Geben Sie einen einfachen Namen ein (z. B. `MySSD`) und
6) klicken Sie auf **Create**. Dadurch wird ein Alias-Remote hinzugefügt, das immer das Root-Verzeichnis Ihrer SSD öffnet.
<img src="/support/images/en/howto/FAQ/creat-alias-remote-for-external-hdd.png" alt="creat alias remote for external hdd" class="img-large img-center" />

7) Der Alias öffnet sich in einem neuen Tab und erscheint außerdem in der linken Liste zur schnellen Wiederverwendung.

<img src="/support/images/en/howto/FAQ/open-alias-remote-for-external-ssd.png" alt="open alias remote for external ssd" class="img-large img-center" />

---

## So verwenden Sie den SSD-Alias bei Backups

- Wählen Sie beim Erstellen eines Sync-/Copy-/Move-Jobs den soeben erstellten Alias-Remote (z. B. `MySSD`) als **Ziel** und Ihr Quell-Remote (z. B. Google Drive, Dropbox, einen anderen lokalen Ordner) als **Quelle**.
- Der Alias verweist auf das Root-Verzeichnis der SSD; Sie können in diesem Tab vor dem Start des Jobs einen Unterordner auswählen oder erstellen.

---

## Wenn die SSD nicht angezeigt wird

- Stellen Sie sicher, dass die SSD im Finder eingebunden ist (bei Bedarf aus- und wieder einstecken).
- Öffnen Sie `/Volumes` erneut in der Pfadleiste und warten Sie einige Sekunden, bis die Laufwerksliste geladen ist.
- Immer noch nicht sichtbar? Starten Sie RcloneView neu und versuchen Sie es erneut mit `/Volumes`. Falls das Problem weiterhin besteht, melden Sie es im [RcloneView-Forum](https://forum.rcloneview.com).

---

## Verwandte Anleitungen

- Übersicht über Alias und andere virtuelle Remotes: [Alias Remote Guide](/howto/remote-storage-connection-settings/alias-remote)
- Allgemeine Explorer-Steuerung und Tabs: [Browse and Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)

