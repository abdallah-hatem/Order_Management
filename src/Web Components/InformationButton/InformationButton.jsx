import { HoverCard, Text, Group } from "@mantine/core";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";
import { useTranslation } from "react-i18next";
import { TitleColor } from "../../../Styles/Colors";

function InformationButton({ text, size = "20px" }) {
   const { t } = useTranslation();

   return (
      <Group position="center">
         <HoverCard width={280} shadow="md">
            <HoverCard.Target>
               {/* <Button>Hover to reveal the card</Button> */}
               {/* <i class="fas fa-info"></i> */}
               <div>
                  <FaInfoCircle color={TitleColor} size={size} />
               </div>
            </HoverCard.Target>
            <HoverCard.Dropdown>
               <Text size="sm">{t(text)}</Text>
            </HoverCard.Dropdown>
         </HoverCard>
      </Group>
   );
}

export default InformationButton;
