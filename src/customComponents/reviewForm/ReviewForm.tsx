import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  // FormLabel2,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  body: z.string().min(3, {
    message: "Review must be at least 3 characters.",
  }),
});

export function ReviewForm({
  handleSubmit,
  labelText,
  defaultValues,
  isSubmittingReview,
}: {
  handleSubmit: ({ reviewText }: { reviewText: string }) => Promise<void>;
  labelText: string;
  defaultValues: z.infer<typeof formSchema>;
  isSubmittingReview: boolean;
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    await handleSubmit({ reviewText: values.body });

    // your code here to clear the text area after comment submitted.
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 max-sm:space-y-5"
      >
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">{labelText}</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="px-2 py-1 min-h-8 h-8 max-h-8 min-w-16 w-16 max-sm:w-full ml-auto"
          type="submit"
          disabled={isSubmittingReview}
        >
          {isSubmittingReview ? <Loader2 className="animate-spin" /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
