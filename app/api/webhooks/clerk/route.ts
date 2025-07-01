import { createOrUpdateUser } from "@/utils/db/actions";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    // console.log(
    //   `Received webhook with ID ${id} and event type of ${eventType}`
    // );
    // console.log("Webhook payload:", evt.data);

    if (eventType === "user.created" || eventType === "user.updated") {
      const { id, email_addresses, first_name, last_name } = evt.data;
      const email = email_addresses[0]?.email_address;
      const name = `${first_name} ${last_name}`;

      if (email) {
        try {
          await createOrUpdateUser(id, email, name);
        } catch (error) {
          console.error("Error creating / updating user", error);
          return new Response("Error processing user data", { status: 500 });
        }
      }
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
