When `Modal` is dismissed at the same time as we're navigating to `/secondchild`, we see a bug where the navigation stack removes `/child` route before pushing `/secondchild`. This does not happen if we comment out `setModalVisible` in `/app/child/index.tsx`. 

https://github.com/user-attachments/assets/47e88735-f2f3-4d74-b1bb-0313e39c4edb

