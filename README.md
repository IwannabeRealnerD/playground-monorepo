# playground-monorepo

이 리포지터리는 다양한 웹 개발 프레임워크를 테스트하고 학습하기 위해 사용하는 프로젝트들을 포함합니다

nextjs-playground: Next.js를 사용하여 만든 웹 어플리케이션입니다.
vite-react-playground: Vite 기반의 React를 사용하여 만든 웹 어플리케이션입니다.
svelte-kit-playground: Svelte Kit를 사용하여 만든 웹 어플리케이션입니다.

이 리포지터리는 PNPM 워크스페이스를 기반으로 하며, 각 프로젝트들은 packages 디렉토리 안에 있습니다. PNPM 워크스페이스를 사용하면 각 프로젝트를 독립적으로 개발하고 빌드할 수 있으며, 필요한 경우 서로 의존성을 공유할 수 있습니다.

## nextjs-playground

nextjs-playground 프로젝트는 Next.js를 사용하여 만든 웹 어플리케이션입니다.

### 사용 방법

1. apps/nextjs-playground 디렉토리로 이동합니다.
2. `pnpm i --frozen-lockfile` 명령어를 실행하여 의존성을 설치합니다.
3. `pnpm dev` 명령어를 실행하여 개발 서버를 시작합니다.
4. 브라우저에서 http://localhost:3000 주소로 접속하여 어플리케이션을 확인합니다.

## svelte-kit-playground

svelte-kit-playground 프로젝트는 Vite와 svelte를 사용하여 만든 웹 어플리케이션입니다.

### 사용 방법

1. apps/svelte-kit-playground 디렉토리로 이동합니다.
2. `pnpm i --frozen-lockfile` 명령어를 실행하여 의존성을 설치합니다.
3. `pnpm dev` 명령어를 실행하여 개발 서버를 시작합니다.
4. 브라우저에서 http://localhost:3001 주소로 접속하여 어플리케이션을 확인합니다.

## ui-vite-playground

ui-react-playground 프로젝트는 Vite와 React를 사용한 UI 컴포넌트 제작한 UI 제작을 위한 프로젝트입니다.

### 사용 방법

1. apps/ui-react-playground 디렉토리로 이동합니다.
2. `pnpm i --frozen-lockfile` 명령어를 실행하여 의존성을 설치합니다.
3. `pnpm dev` 명령어를 실행하여 개발 서버를 시작합니다.
4. 브라우저에서 http://localhost:3002 주소로 접속하여 어플리케이션을 확인합니다.
