# playground-monorepo

해당 리포지터리는 pnpm workspace를 기반으로 구축한 monorepo이며 다양한 웹 개발 프레임워크를 테스트하고 학습하기 위해 사용하는 프로젝트들을 포함합니다.

## 리포지터리 내 프로젝트

---

- FrontEnd 프로젝트 4개, BackEnd 프로젝트 1개로 app 디렉터리 내부에 존재합니다.

### 프로젝트 설명

- nextjs-playground: Next.js 13, React 18 기반의 playground
- vite-react-playground: Vite 기반의 React 18를 사용하여 만든 웹 UI 컴포넌트 제작 playground
- svelte-kit-playground: Svelte Kit를 사용한 playground
- nest-server: nestjs 기반의 서버로 backend playground (진행사항 없음)

## 프로젝트 실행 방법

---

### nextjs-playground

1. apps/nextjs-playground 디렉토리로 이동합니다.
2. `pnpm i --frozen-lockfile` 명령어를 실행하여 의존성을 설치합니다.
3. `pnpm dev` 명령어를 실행하여 개발 서버를 시작합니다.
4. 브라우저에서 http://localhost:3000 주소로 접속하여 어플리케이션을 확인합니다.

### svelte-kit-playground

1. apps/svelte-kit-playground 디렉토리로 이동합니다.
2. `pnpm i --frozen-lockfile` 명령어를 실행하여 의존성을 설치합니다.
3. `pnpm dev` 명령어를 실행하여 개발 서버를 시작합니다.
4. 브라우저에서 http://localhost:3001 주소로 접속하여 어플리케이션을 확인합니다.

### ui-vite-playground

1. apps/ui-react-playground 디렉토리로 이동합니다.
2. `pnpm i --frozen-lockfile` 명령어를 실행하여 의존성을 설치합니다.
3. `pnpm dev` 명령어를 실행하여 개발 서버를 시작합니다.
4. 브라우저에서 http://localhost:3002 주소로 접속하여 어플리케이션을 확인합니다.

### nest-server

- 아직 실행 불가능한 프로젝트 입니다.

## 추후 계획

- turborepo를 도입하여 캐싱을 적극 활용하여 testing, linting, build 시간을 줄일 예정
