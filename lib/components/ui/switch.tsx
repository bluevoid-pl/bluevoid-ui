import type * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "../../utils";
import { type VariantProps, cva } from "class-variance-authority";

const switchVariants = cva(
	"peer inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
	{
		variants: {
			variant: {
				default: "",
				color:
					"data-[state=checked]:bg-green-800 data-[state=unchecked]:bg-red-800 dark:data-[state=checked]:bg-green-500 dark:data-[state=unchecked]:bg-red-500",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function Switch({
	className,
	variant,
	...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> &
	VariantProps<typeof switchVariants>) {
	return (
		<SwitchPrimitive.Root
			data-slot="switch"
			className={cn(switchVariants({ variant }), className)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className={cn(
					"pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
				)}
			/>
		</SwitchPrimitive.Root>
	);
}

export { Switch };
