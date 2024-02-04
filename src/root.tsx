// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="pl">
      <Head>
        <Title>Strona dla ciekawego portalu randkowego dla singli po 40</Title>
        <Meta charset="utf-8" />
        <Meta name='description' content='Strona przeznaczona dla promocji portalu randkowego przeznaczonego dla singli po 40 roku życia. 40 plus zapraszamy do rejestracji na portalu'/>
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <A title='portal randkowy 40latki.pl' href="https://40latki.pl">O portalu</A>
            <A href="/about">O nas</A>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
