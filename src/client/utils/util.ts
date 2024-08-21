import { DescriptionInterface } from "../types/RandomEvent";

/**
 * "/h 안녕 /d 하세요" 가 오면 [{안녕,true},{하세요,false}]로 반환
 * @param {string} description
 * @returns {DescriptionInterface[]} [{content: string, highlighted: boolean}]
 */
export const getDescriptionList = (
  description: string,
): DescriptionInterface[] => {
  const descriptionList = description.split("/");
  let newDiscriptionList: DescriptionInterface[] = [];

  descriptionList.forEach((element) => {
    if (element[0] === "h") {
      newDiscriptionList.push({
        content: element.substring(1),
        highlighted: true,
      });
    } else if (element[0] === "d") {
      newDiscriptionList.push({
        content: element.substring(1),
        highlighted: false,
      });
    }
  });

  return newDiscriptionList;
};

export function calculateLeftTime() {
  const now = new Date();
  const noon = new Date();

  noon.setHours(13, 0, 0, 0);

  return noon.getTime() - now.getTime();
}

export function calculateLeftTimeToEnd() {
  const now = new Date();
  const noon = new Date();

  noon.setHours(14, 0, 0, 0);

  return noon.getTime() - now.getTime();
}
