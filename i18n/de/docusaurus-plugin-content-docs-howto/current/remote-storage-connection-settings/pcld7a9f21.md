---
id: pcld7a9f21
title: pCloud White Label Explorer (Vorschau)
description: Private Vorschau eines vollständig gebrandeten pCloud-Explorer-Desktop-Erlebnisses, angetrieben von RcloneView.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# pCloud White Label Explorer (Vorschau)

Diese Seite ist eine private Vorschau darauf, wie RcloneView als vollständig gebrandete **pCloud Explorer**-Desktopanwendung für Ihre Nutzer bereitgestellt werden kann.

Das Ziel dieses White-Label-Vorschlags ist es:

- Die **pCloud-Marke in den Mittelpunkt** des gesamten Produkts zu stellen.
- Es Nutzern **mühelos zu ermöglichen, ihr pCloud-Konto direkt nach der Installation zu verbinden**.
- Sicherzustellen, dass **pCloud in jedem Verwaltungs- und Navigations-Workflow die erste Wahl** ist.
- **Priorisierten Support und Wartung** speziell für pCloud-gebrandete Bereitstellungen zu bieten.

---

## 1. Brand Kit & visuelle Integration

Wir stellen ein Brand Kit bereit, in dem pCloud die primäre und sichtbare Marke im gesamten Produkt ist. Sämtliches RcloneView-Branding wird entfernt oder nur dort beibehalten, wo es rechtlich erforderlich ist (z. B. interne Versionsangaben).

Wichtige Elemente:

- Anwendungsname auf **„pCloud Explorer“** festgelegt (oder eine andere vereinbarte Bezeichnung).
- Alle RcloneView-Logos werden durch das **pCloud-Logo** ersetzt:
  - Desktop-Verknüpfungen und Taskleisten-Symbole.
  - Installer-Symbole.
  - In-App-Header und Fenstersymbol.
- Farbakzente werden bei Bedarf an die Markenpalette von pCloud angepasst.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-brandkit-examples.png" alt="pcloud brandkit examples" class="img-large img-center" />


---

## 2. Post-Install-pCloud-Remote-Assistent

Unmittelbar nach der Installation werden Nutzer angeleitet, ihr pCloud-Konto zu verbinden, damit sie den Dienst ohne zusätzliche Einrichtungsschritte nutzen können.

Wesentliches Verhalten:

- Am Ende des Einrichtungsassistenten öffnet der Start der App standardmäßig **„pCloud-Remote hinzufügen“** als Onboarding-Ablauf.
- Der Assistent ist vereinfacht und für pCloud vorkonfiguriert:
  - Der Anbietertyp ist bereits als **pCloud** vorausgewählt.
  - Standardmäßig werden nur pCloud-spezifische Optionen angezeigt.
  - Erweiterte Optionen bleiben über einen Link **„Erweiterte Optionen anzeigen“** verfügbar.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-pcloud-remote-wizard.png" alt="post install pcloud remote wizard" class="img-large img-center" />

### Schnellzugriff-Assistent auf der Startseite

Wenn der Nutzer die anfängliche Verbindung überspringt oder den Assistenten schließt:

- Zeigt der rechte Bereich des Startbildschirms eine **große pCloud-Kachel**.
- Ein Klick auf die Kachel öffnet jederzeit erneut den Assistenten **„pCloud-Remote hinzufügen“**.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard.png" alt="on home quick access wizard" class="img-large img-center" />


So wird sichergestellt, dass das Verbinden von pCloud für neue und wiederkehrende Nutzer stets die sichtbarste nächste Aktion ist.

---

## 3. pCloud-First-Navigation & -Verwaltung

Sobald ein pCloud-Remote hinzugefügt wurde, ist die Benutzeroberfläche darauf optimiert, pCloud in allen wichtigen Navigations- und Verwaltungsbildschirmen prominent sichtbar zu halten.

### 3.1 pCloud-Laufwerk im RcloneView Explorer

Wenn das pCloud-Remote als lokales Laufwerk eingebunden (mount) ist:

- Wird das pCloud-Laufwerk (zum Beispiel `pCloud Drive (P:/)`) **oben in der lokalen Remote-Liste von RcloneView** angezeigt.
- Das Laufwerk verwendet das **pCloud-Symbol**, damit es sich optisch klar von anderen Laufwerken abhebt.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="pcloud first in explorer" class="img-medium img-center" />

### 3.2 pCloud-Panel beim erneuten Start angeheftet

Nachdem ein pCloud-Remote konfiguriert wurde:

- Öffnet sich die Benutzeroberfläche bei nachfolgenden Starts standardmäßig mit einem **angehefteten pCloud-Panel**.
- Typisches Layout:
  - Linke Seite: lokale Festplatte oder eine andere Quelle.
  - Rechte Seite: das **MYpCloud**-Remote des Nutzers.
- Dadurch werden wiederholte Synchronisations- oder Kopiervorgänge zwischen lokalen Ordnern und pCloud zu einer Ein-Klick-Aktion.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-panel-pinned-on-re-launch.png" alt="pcloud panel pinned on re launch" class="img-large img-center" />


### 3.3 pCloud zuerst in „Neues Remote“ & „Remote-Manager“

Um pCloud als primären Speicheranbieter hervorzuheben:

- Im Dialog **Neues Remote**:
  - Erscheint pCloud **oben in der Anbieterliste**.
  - Die pCloud-Kachel ist optisch hervorgehoben, um die Auswahl zu fördern.
- Im **Remote-Manager**:
  - Wird das pCloud-Remote (z. B. `MYpCloud`) **oben in der Remote-Liste** angezeigt.
  - Sowohl in der Listen- als auch in der Kartenansicht wird das pCloud-Remote optisch hervorgehoben, um den schnelleren Zugriff zu ermöglichen.


<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-management-dialog.png" alt="pcloud first in management-dialog" class="img-large img-center" />

---

## 4. Priorisierter Support & Wartung für pCloud

Für die pCloud-White-Label-Bereitstellung bieten wir einen dedizierten Support- und Wartungsplan.

Enthaltene Leistungen:

- **Dedizierte Dokumentation**  
  - Separate Handbuchseiten speziell für **pCloud Explorer**-Nutzer.  
  - Schritt-für-Schritt-Anleitungen zum Verbinden, Synchronisieren und zur Fehlerbehebung mit pCloud.

- **Priorisierte Vorfallbearbeitung**  
  - pCloud-Nutzeranliegen werden in der Support-Warteschlange priorisiert.  
  - **Notfallreaktion** bei kritischen Vorfällen, die pCloud-Nutzer betreffen (z. B. Verbindungsfehler, Probleme beim Datenzugriff).

- **Laufende Produktaktualisierungen**  
  - Regelmäßige Desktop-Client-Upgrades als Teil der Wartungsvereinbarung enthalten.  
  - Möglichkeit, neue RcloneView-Funktionen nach gemeinsamer Freigabe unter pCloud-Branding auszurollen.

---

## 5. Nächste Schritte

Wenn Sie mit diesem White-Label-Produkt fortfahren möchten:

1. **Abstimmung des Brandings**
   - Bestätigen Sie die Richtlinien zur Nutzung des pCloud-Logos und die Markenfarben.
   - Legen Sie den endgültigen Produktnamen fest (z. B. *pCloud Explorer*).
2. **Definition des Nutzererlebnisses**
   - Validieren Sie den oben beschriebenen Onboarding-Ablauf und die pCloud-First-Verhaltensweisen.
   - Passen Sie alle Standardeinstellungen an (z. B. Standard-Synchronisationsmodus, Standard-Mount-Pfad).
3. **Pilot-Build**
   - Wir liefern einen privaten Pilot-Build sowie pCloud-spezifische Dokumentation für interne Tests.

Diese Seite und ihre URL sind ausschließlich für pCloud und Partner-Stakeholder bestimmt und erscheinen nicht in der öffentlichen Navigation oder Suche. Sie kann während der Evaluierungs- und Pilotgespräche sicher als direkter Link geteilt werden.
