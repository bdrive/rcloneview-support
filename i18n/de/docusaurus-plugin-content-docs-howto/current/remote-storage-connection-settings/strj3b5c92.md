---
id: strj3b5c92
title: Storj White Label Explorer (Vorschau)
description: Private Vorschau eines vollständig gebrandeten Storj-Explorer-Desktop-Erlebnisses, bereitgestellt mit RcloneView.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# Storj White Label Explorer (Vorschau)

Diese Seite ist eine private Vorschau darauf, wie RcloneView als vollständig gebrandete **Storj Explorer**-Desktop-Anwendung für Ihre Nutzer bereitgestellt werden kann.

Das Ziel dieses White-Label-Vorschlags ist:

- Die **Storj-Marke in den Mittelpunkt** des gesamten Produkts zu stellen.
- Es Nutzern **mühelos zu ermöglichen, ihr Storj-Konto** unmittelbar nach der Installation zu verbinden.
- Sicherzustellen, dass **Storj die erste Wahl** in jedem Verwaltungs- und Navigations-Workflow ist.
- **Priorisierten Support und Wartung** speziell für Storj-gebrandete Deployments bereitzustellen.

---

## 1. Brand Kit & visuelle Integration

Wir stellen ein Brand Kit bereit, in dem Storj im gesamten Produkt die primäre und sichtbare Marke ist. Sämtliches RcloneView-Branding wird entfernt oder nur dort beibehalten, wo es rechtlich erforderlich ist (z. B. interne Versionsangaben).

Wichtige Elemente:

- Anwendungsname auf **„Storj Explorer“** gesetzt (oder eine andere vereinbarte Bezeichnung).
- Alle RcloneView-Logos werden durch das **Storj-Logo** ersetzt:
  - Desktop-Verknüpfungen und Taskleisten-Symbole.
  - Installer-Symbole.
  - Header und Fenstersymbol in der App.
- Farbakzente werden dort, wo es angemessen ist, an die Storj-Markenpalette angepasst.


<img src="/support/images/en/howto/remote-storage-connection-settings/storj-brandkit-example.png" alt="storj brandkit example" class="img-large img-center" />


---

## 2. Post-Install Storj-Remote-Assistent

Unmittelbar nach der Installation werden Nutzer angeleitet, ihr Storj-Konto zu verbinden, sodass sie den Dienst ohne zusätzliche Einrichtungsschritte nutzen können.

Hauptverhalten:

- Am Ende des Setup-Assistenten öffnet der App-Start standardmäßig **„Storj-Remote hinzufügen“** als Onboarding-Flow.
- Der Assistent ist vereinfacht und für Storj vorkonfiguriert:
  - Der Provider-Typ ist als **Storj** vorausgewählt.
  - Standardmäßig werden nur Storj-spezifische Optionen angezeigt.
  - Erweiterte Optionen bleiben über einen Link **„Erweiterte Optionen anzeigen“** verfügbar.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-storj-remote-wizard.png" alt="post install storj remote wizard" class="img-large img-center" />

### Schnellzugriffs-Assistent auf der Startseite

Wenn der Nutzer die anfängliche Verbindung überspringt oder den Assistenten schließt:

- Zeigt das rechte Panel des Startbildschirms eine **große Storj-Kachel**.
- Ein Klick auf die Kachel öffnet den Assistenten **„Storj-Remote hinzufügen“** jederzeit erneut.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-storj.png" alt="on home quick access wizard for storj" class="img-large img-center" />

Dadurch ist das Verbinden mit Storj für neue oder wiederkehrende Nutzer stets die sichtbarste nächste Aktion.

---

## 3. Storj-First-Navigation & -Verwaltung

Sobald ein Storj-Remote hinzugefügt wurde, ist die Benutzeroberfläche darauf optimiert, Storj auf allen wichtigen Navigations- und Verwaltungsbildschirmen deutlich sichtbar zu halten.

### 3.1 Storj-Panel beim erneuten Start angeheftet

Nachdem ein Storj-Remote konfiguriert wurde:

- Öffnet sich die Benutzeroberfläche bei nachfolgenden Starts standardmäßig mit einem **angehefteten Storj-Panel**.
- Typisches Layout:
  - Linke Seite: lokale Festplatte oder eine andere Quelle.
  - Rechte Seite: der **MYStorj**-Remote des Nutzers.
- Nutzer können Panels per Drag-and-Drop frei anordnen, sodass das Storj-Panel unabhängig von der bevorzugten Arbeitsweise zwischen der linken und rechten Seite verschoben werden kann.
- Dadurch werden wiederholte Synchronisations- oder Kopiervorgänge zwischen lokalen Ordnern und Storj zu einer Ein-Klick-Aktion, unabhängig davon, auf welcher Seite sich das Storj-Panel gerade befindet.

<img src="/support/images/en/howto/remote-storage-connection-settings/storj-panel-pinned-on-re-launch.png" alt="storj panel pinned on re launch" class="img-large img-center" />


### 3.2 Storj zuerst in „Neues Remote“ & „Remote-Verwaltung“

Um Storj als primären Storage-Anbieter hervorzuheben:

- Im Dialog **Neues Remote**:
  - Erscheint Storj **oben in der Anbieterliste**.
  - Ist die Storj-Kachel visuell hervorgehoben, um die Auswahl zu fördern.
- In der **Remote-Verwaltung**:
  - Wird das Storj-Remote (z. B. `MYStorj`) **oben in der Remote-Liste** angezeigt.
  - Ist das Storj-Remote sowohl in der Listen- als auch in der Kartenansicht visuell hervorgehoben, um einen schnelleren Zugriff zu ermöglichen.



<img src="/support/images/en/howto/remote-storage-connection-settings/storj-first-in-management-dialog.png" alt="storj first in management dialog" class="img-large img-center" />

---

## 4. Priorisierter Support & Wartung für Storj

Für das Storj-White-Label-Deployment stellen wir einen dedizierten Support- und Wartungs-Track bereit.

Enthaltene Leistungen:

- **Dedizierte Dokumentation**  
  - Separate Handbuchseiten speziell für **Storj Explorer**-Nutzer.  
  - Schritt-für-Schritt-Anleitungen für Verbindung, Synchronisation und Fehlerbehebung mit Storj.

- **Priorisierte Vorfallsbearbeitung**  
  - Storj-Nutzerprobleme werden in der Support-Warteschlange priorisiert.  
  - **Notfallreaktion** bei kritischen Vorfällen, die Storj-Nutzer betreffen (z. B. Verbindungsfehler, Probleme beim Datenzugriff).

- **Laufende Produktaktualisierungen**  
  - Regelmäßige Desktop-Client-Upgrades als Teil der Wartungsvereinbarung enthalten.  
  - Möglichkeit, neue RcloneView-Funktionen nach gemeinsamer Freigabe unter Storj-Branding auszurollen.

---

## 5. Nächste Schritte

Wenn Sie mit diesem White-Label-Produkt fortfahren möchten:

1. **Branding-Abstimmung**
   - Bestätigen Sie die Richtlinien zur Storj-Logo-Nutzung und die Markenfarben.
   - Entscheiden Sie über den finalen Produktnamen (z. B. *Storj Explorer*).
2. **Definition des Nutzererlebnisses**
   - Validieren Sie den oben beschriebenen Onboarding-Flow und die Storj-First-Verhaltensweisen.
   - Passen Sie beliebige Standardeinstellungen an (z. B. Standard-Synchronisationsmodus, Standard-Mount-Pfad).
3. **Pilot-Build**
   - Wir liefern einen privaten Pilot-Build und Storj-spezifische Dokumentation für interne Tests.

Diese Seite und ihre URL sind ausschließlich für Storj und Partner-Stakeholder bestimmt und erscheinen nicht in der öffentlichen Navigation oder Suche. Sie kann während der Evaluierung und der Pilot-Gespräche sicher als Direktlink geteilt werden.
