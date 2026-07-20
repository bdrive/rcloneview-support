---
sidebar_position: 14
description: Verschlüsseln Sie Ihre rclone-Konfigurationsdatei und verwenden Sie sie mit RcloneView, indem Sie ein Konfigurationspasswort in den Einstellungen festlegen.
keywords:
  - rcloneview
  - rclone config
  - encrypted config
  - config password
  - security
  - rclone.conf
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - rclone config
date: 2026-02-12
author: ysh
---

# Verwendung einer verschlüsselten Rclone-Konfigurationsdatei

Rclone kann seine Konfigurationsdatei (`rclone.conf`) verschlüsseln, sodass Remote-Zugangsdaten nicht im Klartext gespeichert werden. RcloneView unterstützt verschlüsselte Konfigurationsdateien vollständig — Sie müssen nur das Passwort angeben.

Dieses Tutorial behandelt:

- Warum Sie Ihre rclone-Konfiguration verschlüsseln sollten
- Wie Sie Ihre bestehende Konfiguration mit `rclone config` verschlüsseln
- Wie Sie das Konfigurationspasswort in RcloneView eingeben

---

## Warum die rclone-Konfiguration verschlüsseln?

Ihre `rclone.conf`-Datei enthält Zugangsdaten (Tokens, Passwörter, API-Schlüssel) für jeden konfigurierten Remote. Standardmäßig werden diese im Klartext gespeichert. Das Verschlüsseln der Konfigurationsdatei schützt diese Zugangsdaten, falls jemand Zugriff auf Ihren Computer oder Ihr Backup erhält.

- Verhindert die Offenlegung von Zugangsdaten im Klartext.
- Fügt auf gemeinsam genutzten oder Mehrbenutzersystemen eine zusätzliche Sicherheitsebene hinzu.
- Funktioniert mit allen rclone-Remotes und -Funktionen — es ändert sich nichts, außer dass die Datei im Ruhezustand verschlüsselt ist.

---

## Schritt 1: rclone-Konfiguration verschlüsseln

Öffnen Sie ein Terminal und führen Sie Folgendes aus:

```bash
rclone config
```

Es wird ein Menü mit Optionen angezeigt. Wählen Sie **`s`**, um **Set configuration password** auszuwählen:

```
s) Set configuration password
q) Quit config
s/q> s
```

Geben Sie bei Aufforderung das gewünschte Passwort ein und bestätigen Sie es. Rclone verschlüsselt die bestehende Konfigurationsdatei direkt an Ort und Stelle.

:::tip
Falls Sie bereits Remotes konfiguriert haben, funktionieren diese weiterhin. Rclone verschlüsselt die gesamte Datei mit Ihrem neuen Passwort erneut.
:::

:::caution
Merken Sie sich dieses Passwort. Wenn Sie es verlieren, müssen Sie Ihre Remotes von Grund auf neu konfigurieren.
:::

---

## Schritt 2: Konfigurationspasswort in RcloneView eingeben

1. Öffnen Sie **Settings** (über das obere Menü).
2. Wechseln Sie zum Tab **Embedded Rclone**.
3. Scrollen Sie nach unten zu **Advanced Options**.
4. Geben Sie im Feld **Config Password** dasselbe Passwort ein, das Sie in Schritt 1 festgelegt haben.
5. Klicken Sie auf **Restart Embedded Rclone**.

<img src="/support/images/en/tutorials/encrypted-config/settings-config-password.png" class="img-large img-center" alt="Config Password field in Embedded Rclone settings" />

Das war's — RcloneView entschlüsselt und verwendet Ihre verschlüsselte Konfiguration nahtlos. Ihre Remotes werden wie gewohnt angezeigt und funktionieren normal.

---

## Zusammenfassung

| Element | Beschreibung |
| --- | --- |
| Funktion | Verwendung einer verschlüsselten rclone-Konfigurationsdatei mit RcloneView |
| Verschlüsseln | `rclone config` ausführen → `s) Set configuration password` |
| RcloneView-Einrichtung | Settings → Embedded Rclone → Advanced Options → Config Password |
| Anwenden | Nach Eingabe des Passworts auf **Restart Embedded Rclone** klicken |
| Am besten geeignet für | Schutz von Zugangsdaten auf gemeinsam genutzten oder sensiblen Systemen |
