import { inngest } from "../functions/client.js";
import User from "../../models/user.model.js";
import { NonRetriableError } from "inngest";
import sendMail from "../../utils/mailer.js";
const onUserSignUp = inngest.createFunction(
  {
    id: "on-user-signup",
    retries: 2,
  },
  {
    event: "user/signup",
  },

  async ({ event, step }) => {
    try {
      const { email } = event.data;
      const user = await step.run("get-user-email", async () => {
        const userObj = await User.findOne({ email });

        if (!userObj) {
          throw new NonRetriableError("User no longer exists");
        }

        return userObj;
      });

      await step.run("send-welcome-email", async () => {
        const subject = `Welcome to the App`;
        const message = `Hi \n \n \n  Thanks for signing up. `;

        await sendMail(user.email, subject, message);


        return {success:true}
      });
    } catch (error) {

        console.error("X---- Error running step" , error.message)
        throw error;
    }
  }
);

export { onUserSignUp };
