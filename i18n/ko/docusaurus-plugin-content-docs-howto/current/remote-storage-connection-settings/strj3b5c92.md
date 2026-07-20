---
id: strj3b5c92
title: Storj 화이트 라벨 익스플로러 (프리뷰)
description: RcloneView 기반의 완전한 브랜딩이 적용된 Storj 익스플로러 데스크톱 경험 비공개 프리뷰.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# Storj 화이트 라벨 익스플로러 (프리뷰)

이 페이지는 RcloneView가 귀사 사용자를 위해 완전한 브랜딩이 적용된 **Storj 익스플로러** 데스크톱 애플리케이션으로 제공될 수 있는 방법을 보여주는 비공개 프리뷰입니다.

이 화이트 라벨 제안의 목표는 다음과 같습니다.

- 제품 전체에 걸쳐 **Storj 브랜드를 전면에 부각**시킵니다.
- 설치 직후 **사용자가 손쉽게 Storj 계정을 연결**할 수 있도록 합니다.
- 모든 관리 및 탐색 워크플로에서 **Storj가 최우선으로 선택**되도록 보장합니다.
- Storj 브랜딩 배포에 특화된 **우선 지원 및 유지관리**를 제공합니다.

---

## 1. 브랜드 키트 및 시각적 통합

Storj가 제품 전체에서 주요하고 눈에 띄는 브랜드가 되는 브랜드 키트를 제공합니다. 모든 RcloneView 브랜딩은 제거되거나, 법적으로 필요한 경우(예: 내부 버전 문자열)에만 유지됩니다.

주요 요소:

- 애플리케이션 이름을 **"Storj 익스플로러"**(또는 별도로 합의된 명칭)로 설정.
- 모든 RcloneView 로고를 **Storj 로고**로 교체:
  - 데스크톱 바로가기 및 작업 표시줄 아이콘.
  - 설치 프로그램 아이콘.
  - 앱 내 헤더 및 창 아이콘.
- 필요에 따라 Storj 브랜드 팔레트에 맞춰 색상 강조 조정.


<img src="/support/images/en/howto/remote-storage-connection-settings/storj-brandkit-example.png" alt="storj brandkit example" class="img-large img-center" />


---

## 2. 설치 후 Storj 리모트 마법사

설치 직후 사용자는 별도의 추가 설정 단계 없이 서비스를 바로 사용할 수 있도록 Storj 계정을 연결하는 과정으로 안내됩니다.

주요 동작:

- 설정 마법사가 끝나면 앱을 실행할 때 **"Storj 리모트 추가"**가 기본 온보딩 흐름으로 열립니다.
- 마법사는 Storj에 맞춰 단순화되고 사전 구성되어 있습니다:
  - 프로바이더 유형이 **Storj**로 미리 선택되어 있습니다.
  - 기본적으로 Storj 전용 옵션만 표시됩니다.
  - 고급 옵션은 **"고급 옵션 표시"** 링크 뒤에서 계속 사용할 수 있습니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-storj-remote-wizard.png" alt="post install storj remote wizard" class="img-large img-center" />

### 홈 화면 빠른 액세스 마법사

사용자가 초기 연결을 건너뛰거나 마법사를 닫은 경우:

- 홈 화면의 오른쪽 패널에 **큰 Storj 타일**이 표시됩니다.
- 이 타일을 클릭하면 언제든지 **"Storj 리모트 추가"** 마법사가 다시 열립니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-storj.png" alt="on home quick access wizard for storj" class="img-large img-center" />

이를 통해 신규 및 재방문 사용자 모두에게 Storj 연결이 항상 가장 눈에 띄는 다음 동작으로 유지됩니다.

---

## 3. Storj 우선 탐색 및 관리

Storj 리모트가 추가되면 UI는 모든 주요 탐색 및 관리 화면에서 Storj가 눈에 띄게 유지되도록 최적화됩니다.

### 3.1 재실행 시 고정되는 Storj 패널

Storj 리모트가 구성된 이후:

- 다음 실행부터는 기본적으로 **Storj 패널이 고정된 상태**로 UI가 열립니다.
- 일반적인 레이아웃:
  - 왼쪽: 로컬 디스크 또는 다른 소스.
  - 오른쪽: 사용자의 **MYStorj** 리모트.
- 사용자는 드래그 앤 드롭으로 패널을 자유롭게 재배치할 수 있으므로, 선호하는 작업 방식에 따라 Storj 패널을 왼쪽과 오른쪽 사이에서 이동할 수 있습니다.
- 이를 통해 Storj 패널이 현재 어느 쪽에 있든 로컬 폴더와 Storj 간의 반복적인 동기화나 복사 작업을 원클릭으로 수행할 수 있습니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/storj-panel-pinned-on-re-launch.png" alt="storj panel pinned on re launch" class="img-large img-center" />


### 3.2 "새 리모트" 및 "리모트 관리자"에서 Storj 최상단 배치

Storj를 주요 스토리지 프로바이더로 강조하기 위해:

- **새 리모트** 대화상자에서:
  - Storj가 프로바이더 목록의 **맨 위**에 표시됩니다.
  - Storj 타일이 선택을 유도하도록 시각적으로 강조됩니다.
- **리모트 관리자**에서:
  - Storj 리모트(예: `MYStorj`)가 리모트 목록의 **맨 위**에 표시됩니다.
  - 목록 보기와 카드 보기 모두에서 Storj 리모트가 더 빠르게 접근할 수 있도록 시각적으로 강조됩니다.



<img src="/support/images/en/howto/remote-storage-connection-settings/storj-first-in-management-dialog.png" alt="storj first in management dialog" class="img-large img-center" />

---

## 4. Storj를 위한 우선 지원 및 유지관리

Storj 화이트 라벨 배포를 위해 전담 지원 및 유지관리 트랙을 제공합니다.

포함된 서비스:

- **전용 문서**  
  - **Storj 익스플로러** 사용자를 위한 별도의 매뉴얼 페이지.  
  - Storj를 통한 연결, 동기화, 문제 해결에 대한 단계별 가이드.

- **우선 인시던트 처리**  
  - Storj 사용자 문제는 지원 대기열에서 우선순위가 부여됩니다.  
  - Storj 사용자에게 영향을 미치는 심각한 인시던트(예: 연결 실패, 데이터 액세스 문제)에 대한 **긴급 대응**.

- **지속적인 제품 업데이트**  
  - 유지관리 계약의 일부로 정기적인 데스크톱 클라이언트 업그레이드가 포함됩니다.  
  - 공동 승인 후 Storj 브랜딩 하에 새로운 RcloneView 기능을 출시할 수 있는 옵션.

---

## 5. 다음 단계

이 화이트 라벨 제품을 진행하고자 하는 경우:

1. **브랜딩 정합**
   - Storj 로고 사용 지침 및 브랜드 색상 확인.
   - 최종 제품명 결정(예: *Storj 익스플로러*).
2. **경험 정의**
   - 위에서 설명한 온보딩 흐름과 Storj 우선 동작을 검증.
   - 기본 설정 조정(예: 기본 동기화 모드, 기본 마운트 경로).
3. **파일럿 빌드**
   - 내부 테스트를 위한 비공개 파일럿 빌드 및 Storj 전용 문서를 제공합니다.

이 페이지와 해당 URL은 Storj 및 파트너 이해관계자만을 위한 것이며 공개 탐색이나 검색에는 노출되지 않습니다. 평가 및 파일럿 논의 중에 직접 링크로 안전하게 공유할 수 있습니다.
