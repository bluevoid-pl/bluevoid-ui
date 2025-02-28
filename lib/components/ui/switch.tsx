import type * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "../../utils";
import { type VariantProps, cva } from "class-variance-authority";

//				"peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",


const switchVariants = cva(
	"peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors disabled:cursor-not-allowed data-[state=checked]:bg-primary data-[state=unchecked]:bg-input disabled:opacity-50 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-background",
	{
		variants: {
			variant: {
				default: "",
				color:
					"data-[state=checked]:bg-green-800 dark:data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-800 dark:data-[state=unchecked]:bg-red-500",
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
}: React.ComponentProps<typeof SwitchPrimitive.Root> & VariantProps<typeof switchVariants>) {
	return (
		<SwitchPrimitive.Root
			data-slot="switch"
			className={cn(switchVariants({ variant }),className)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className={cn(
					"bg-background pointer-events-none block size-4 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
				)}
			/>
		</SwitchPrimitive.Root>
	);
}

export { Switch };
