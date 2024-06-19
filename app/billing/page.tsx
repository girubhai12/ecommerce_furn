import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { Button } from "@/components/ui/button";
import { CreateStripeAccoutnLink, GetStripeDashboardLink } from "../actions";
import { Submitbutton } from "../components/SubmitButtons";

async function getData(userId: string){
    const data = await prisma.user.findUnique({
        where:{
            id: userId,

        },
        select:{
         stripeConnectedLinked: true,
        }
    });
    return data;
}

export default async function BillingRoute(){
    const { getUser} = getKindeServerSession();
    const user = await getUser();


    if (!user){
        throw new Error("Unauthorized")
    }

    const  data = await getData(user.id);
    // console.log("User Data:", data);

    return(
        <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
       <CardHeader> 
    <CardTitle>
        Billing
    </CardTitle>
    <CardDescription>
  Find all your details regarding your products


    </CardDescription>
</CardHeader>

<CardContent>
    
  {/* {data?.stripeConnectedLinked === false && (
    <form action={CreateStripeAccoutnLink}>
    <Button type="submit"> Link your account</Button>
    </form>
  )} */}
    {data?.stripeConnectedLinked === false && (
      <form action={CreateStripeAccoutnLink} >
      
          <Submitbutton title="Link your account to stripe
" />
      </form>
    )}
    {data?.stripeConnectedLinked == true && (
      <form action ={ GetStripeDashboardLink } >
        <Submitbutton title="view Dashboard" />
      </form>
    )}

  

</CardContent>




      </Card>

        </section>
    );
}