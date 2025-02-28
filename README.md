# BlueVoid ui library based on shadcn

### Instalation

1. install `@bluevoid/ui` and peer dependencies
```
pnpm i @bluevoid/ui @mantine/hooks @tabler/icons-react
```
2. install tailwindcss
3. install shadcn
4. add source to main css file
```
@source '../../node_modules/@bluevoid/ui/dist/**/*.js';
```

| Component | required deps |
| :--- |  :--- |
| Calendar | date-fns |
| Carousel | embla-carousel-react |
| Chart | recharts |
| ColorPicker | tinycolor2 |
| Form | react-hook-form @hookform/resolvers zod |
| InputOTP | input-otp |
| Resizable | react-resizable-panels |
| Theme | - |