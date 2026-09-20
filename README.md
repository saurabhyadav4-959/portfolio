# React Performance Lab

> **Interactive React Performance Optimization Dashboard**  
> Analyze, optimize, and understand React rendering performance, code splitting, memoization, and empirical profiling metrics.

---

## Overview

**React Performance Lab** is a modern developer dashboard built with **React 19**, **TypeScript**, and **Vite**. Inspired by design systems from Linear, Vercel, and modern developer tooling, it provides interactive testbeds and empirical diagnostics to demonstrate core React performance optimization strategies:

- **Component Reconciliation Isolation:** Eliminating redundant child re-renders via `React.memo`.
- **Computation Caching:** Caching algorithmic sorting and filtering over large datasets using `useMemo`.
- **Dynamic Asset Splitting:** Deferring non-critical module payloads with `React.lazy` and `<Suspense>`.
- **Empirical Profiling:** Native instrumentation with React's `<Profiler>` API and DevTools flamegraph analysis.
- **Side-by-Side Benchmarking:** Before vs. After architectural comparisons and real-world production case studies.

---

## Core Optimization Pillars

### 1. `React.memo`
Performs shallow comparison on component props to skip reconciliation passes when parent state updates without changing child inputs.
```tsx
const ProductCard = React.memo(function ProductCard({ product }) {
  return (
    <article className="card">
      <h4>{product.name}</h4>
      <p>{product.price}</p>
    </article>
  );
});
```

### 2. `useMemo`
Caches the return value of expensive synchronous calculations between renders, re-evaluating only when explicitly listed dependencies mutate.
```tsx
const filteredProducts = useMemo(() => {
  return products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
}, [products, search]);
```

### 3. Code Splitting & Lazy Loading
Splits monolithic bundles into discrete network chunks loaded on-demand, reducing initial JavaScript parse and execution time.
```tsx
const LazyAuditModule = React.lazy(() => import('./LazyAuditModule'));

<Suspense fallback={<LoadingSpinner />}>
  <LazyAuditModule />
</Suspense>
```

### 4. Native React Profiling
Records mount and commit phase metrics, `actualDuration`, and `baseDuration` in real time:
```tsx
<Profiler id="ReactPerformanceLab" onRender={handleProfilerRender}>
  <Dashboard />
</Profiler>
```

---

## Dashboard Sections

1. **Telemetry Overview:** High-level metrics tracking Initial Render (42 ms), Re-render Events (18), Bundle Size (186 KB), and Optimization Gain (37%).
2. **Optimization Techniques:** Six in-depth cards highlighting before/after concepts, category tags, and expandable syntax examples.
3. **Before vs After:** Side-by-side comparative table detailing render behaviors, data processing pipelines, and bundle footprints.
4. **Live Interactive Demonstrations:**
   - **React.memo Demo:** Live parent ticker showing unmemoized component renders incrementing while `React.memo` remains locked.
   - **useMemo Benchmark:** Query filtering over 4,800 items with live sub-millisecond execution telemetry versus unmemoized recalculation.
   - **Code Splitting Demo:** Interactive chunk mounting and unmounting through React Suspense.
5. **Performance Profiling:** In-depth guide to React DevTools Profiler, commit phases, and live telemetry log capturing actual durations.
6. **Case Studies:** Three real-world production scenarios (Unnecessary Re-renders, Expensive Calculation, and Large Initial Bundle).
7. **Performance Audit Form:** Fully validated interactive checklist tool ensuring components meet production performance guardrails.

---

## Technology Stack

- **React 19**
- **TypeScript 7**
- **Vite 8**
- **styled-components 6**
- **React Icons 5**

---

## Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open the local URL shown by Vite in your browser.

### 3. Production Build
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

---

## License
MIT
