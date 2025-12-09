import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { TooltipProvider, ToastProvider } from '@radenadri/void-ui';
import '@radenadri/void-ui/styles.css';

import { DocsLayout } from '@/docs/layouts/docs-layout';
import { DocumentTitleManager } from '@/components/document-title-manager';
import { ScrollToTop } from '@/components/scroll-to-top';
import {
  IntroductionPage,
  QuickStartPage,
  AccordionPage,
  ButtonPage,
  InputPage,
  CardPage,
  BadgePage,
  CheckboxPage,
  SwitchPage,
  DialogPage,
  TabsPage,
  TooltipPage,
  NotFoundPage,
  AlertPage,
  AvatarPage,
  SelectPage,
  ProgressPage,
  SliderPage,
  RadioPage,
  TextareaPage,
  SpinnerPage,
  PopoverPage,
  TablePage,
  StackPage,
  HeadingPage,
  TextPage,
  SeparatorPage,
  KbdPage,
  ToastPage,
  AlertDialogPage,
  ChipPage,
  CollapsiblePage,
  DividerPage,
  DropdownPage,
  MenuPage,
  PaginationPage,
  LabelPage,
  FieldPage,
  FieldsetPage,
  IconBoxPage,
  IconsPage,
} from '@/docs/pages';
import { LandingPage } from '@/pages/landing';
import { mdxComponents } from '@/docs/components';
import {
  BlocksIndexPage,
  AuthenticationBlocksPage,
  DashboardBlocksPage,
} from '@/blocks';

function App() {
  // Initialize theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('void-ui-theme');
    if (stored === 'light' || !stored) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <DocumentTitleManager />
      <ToastProvider>
        <MDXProvider components={mdxComponents}>
          <TooltipProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* Blocks */}
              <Route path="/blocks" element={<BlocksIndexPage />} />
              <Route
                path="/blocks/authentication"
                element={<AuthenticationBlocksPage />}
              />
              <Route
                path="/blocks/dashboard"
                element={<DashboardBlocksPage />}
              />
              <Route path="/docs" element={<DocsLayout />}>
                <Route index element={<IntroductionPage />} />
                <Route path="quick-start" element={<QuickStartPage />} />
                <Route
                  path="components/accordion"
                  element={<AccordionPage />}
                />
                <Route path="components/button" element={<ButtonPage />} />
                <Route path="components/input" element={<InputPage />} />
                <Route path="components/card" element={<CardPage />} />
                <Route path="components/badge" element={<BadgePage />} />
                <Route path="components/checkbox" element={<CheckboxPage />} />
                <Route path="components/switch" element={<SwitchPage />} />
                <Route path="components/dialog" element={<DialogPage />} />
                <Route path="components/tabs" element={<TabsPage />} />
                <Route path="components/tooltip" element={<TooltipPage />} />
                <Route path="components/alert" element={<AlertPage />} />
                <Route
                  path="components/alert-dialog"
                  element={<AlertDialogPage />}
                />
                <Route path="components/avatar" element={<AvatarPage />} />
                <Route path="components/chip" element={<ChipPage />} />
                <Route
                  path="components/collapsible"
                  element={<CollapsiblePage />}
                />
                <Route path="components/divider" element={<DividerPage />} />
                <Route path="components/dropdown" element={<DropdownPage />} />
                <Route path="components/field" element={<FieldPage />} />
                <Route path="components/fieldset" element={<FieldsetPage />} />
                <Route path="components/heading" element={<HeadingPage />} />
                <Route path="components/icon-box" element={<IconBoxPage />} />
                <Route path="components/kbd" element={<KbdPage />} />
                <Route path="components/label" element={<LabelPage />} />
                <Route path="components/menu" element={<MenuPage />} />
                <Route
                  path="components/pagination"
                  element={<PaginationPage />}
                />
                <Route path="components/popover" element={<PopoverPage />} />
                <Route path="components/progress" element={<ProgressPage />} />
                <Route path="components/radio" element={<RadioPage />} />
                <Route path="components/select" element={<SelectPage />} />
                <Route
                  path="components/separator"
                  element={<SeparatorPage />}
                />
                <Route path="components/slider" element={<SliderPage />} />
                <Route path="components/spinner" element={<SpinnerPage />} />
                <Route path="components/stack" element={<StackPage />} />
                <Route path="components/table" element={<TablePage />} />
                <Route path="components/text" element={<TextPage />} />
                <Route path="components/textarea" element={<TextareaPage />} />
                <Route path="components/toast" element={<ToastPage />} />
                <Route path="icons" element={<IconsPage />} />
                {/* 404 for unknown routes */}
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </TooltipProvider>
        </MDXProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
