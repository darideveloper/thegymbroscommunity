# Design: Static Product Configuration with Custom Names

## Architecture Overview
The product data is currently fetched through a simulated API in `src/lib/api/products.ts`. To support custom naming while keeping the codebase DRY and maintainable, we will implement a configuration-driven approach.

## Data Structure
We will introduce a `TITLE_MAP` constant that maps the known filenames to their respective customer-facing names.

**Title Mapping:**
- `1-product`: Elite Tech Tee
- `2-product`: Performance Shorts
- `3-product`: Compression Leggings
- `4-product`: Training Tank Top
- `5-product`: Oversized Hoodie
- `6-product`: Heavyweight Joggers
- `7-product`: Seamless Sports Bra
- `8-product`: Athletic Crew Socks
- `9-product`: Gym Bro Windbreaker
- `10-product`: Pro Wrist Wraps
- `11-product`: Padded Lifting Belt
- `12-product`: Gym Duffle Bag

## Implementation Strategy
To keep the implementation DRY and performant:
1.  **Glob Discovery**: We will continue using `import.meta.glob` to automatically discover all files in the products folder. This avoids the need for 12 manual import statements and ensures new images are automatically detected.
2.  **Mapping Layer**: The `getProducts` function will act as a mapping layer. It will split the filepath to get the base filename and use it as a key for our `TITLE_MAP`.
3.  **Fallback Logic**: For any image that does not have a custom name defined, we will provide a sensible default (e.g., "Premium Product") to prevent UI breakage.

## Benefits
-   **DRY**: No manual imports; the filesystem remains the source of truth for "what exists," while the code defines "what it's called."
-   **Maintainability**: Adding a new product only requires adding a line to the `TITLE_MAP` if the default name isn't sufficient.
-   **Performance**: Vite's eager glob is pre-compiled and extremely fast at runtime.
