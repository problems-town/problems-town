import i18next from "i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";

const translation = {
  errors: {
    invalid_type: "期望輸入的是{{expected}}，而輸入的是{{received}}",
    invalid_type_received_undefined: "必填的欄位",
    invalid_type_received_null: "必填的欄位",
    invalid_literal: "無效的輸入，請輸入 {{expected}}",
    unrecognized_keys: "無法識別物件的鍵值：{{- keys}}",
    invalid_union: "輸入格式錯誤",
    invalid_union_discriminator: "無效的識別符，請輸入 {{- options}}",
    invalid_enum_value: "無效的 '{{received}}' 值，請輸入 {{- options}}",
    invalid_arguments: "參數錯誤",
    invalid_return_type: "錯誤的回傳值類型",
    invalid_date: "日期格式錯誤",
    custom: "格式錯誤",
    invalid_intersection_types: "交集類型無法合併",
    not_multiple_of: "必須是 {{multipleOf}} 的倍數",
    not_finite: "不能為無限值",
    invalid_string: {
      email: "{{validation}}格式錯誤",
      url: "{{validation}}格式錯誤",
      uuid: "{{validation}} 格式錯誤",
      cuid: "{{validation}} 格式錯誤",
      regex: "格式錯誤",
      datetime: "{{validation}} 格式錯誤",
      startsWith: '必須以 "{{startsWith}}" 開始',
      endsWith: '必須以 "{{endsWith}}" 結尾',
    },
    too_small: {
      array: {
        exact: "必須恰好包含 {{minimum}} 個元素",
        inclusive: "至少需要包含 {{minimum}} 個元素",
        not_inclusive: "必須包含多於 {{minimum}} 個元素",
      },
      string: {
        exact: "必須恰好 {{minimum}} 個字元",
        inclusive: "至少需要包含 {{minimum}} 個字元",
        not_inclusive: "必須包含多於 {{minimum}} 個字元",
      },
      number: {
        exact: "必須是 {{minimum}}",
        inclusive: "必須大於或等於 {{minimum}}",
        not_inclusive: "必須大於 {{minimum}}",
      },
      set: {
        exact: "無效的輸入",
        inclusive: "無效的輸入",
        not_inclusive: "無效的輸入",
      },
      date: {
        inclusive: "日期必須晚於或等於 {{- minimum, datetime}}",
        not_inclusive: "日期必須晚於 {{- minimum, datetime}}",
      },
    },
    too_big: {
      array: {
        exact: "必須恰好包含 {{maximum}} 個元素",
        inclusive: "最多只能包含 {{maximum}} 個元素",
        not_inclusive: "必須少於 {{maximum}} 個元素",
      },
      string: {
        exact: "必須恰好 {{maximum}} 個字元",
        inclusive: "最多只能包含 {{maximum}} 個字元",
        not_inclusive: "必須少於 {{maximum}} 個字元",
      },
      number: {
        exact: "必須是 {{maximum}}",
        inclusive: "必須小於或等於 {{maximum}}",
        not_inclusive: "必須小於 {{maximum}}",
      },
      set: {
        exact: "無效的輸入",
        inclusive: "無效的輸入",
        not_inclusive: "無效的輸入",
      },
      date: {
        inclusive: "日期必須早於或等於 {{- maximum, datetime}}",
        not_inclusive: "日期必須早於 {{- maximum, datetime}}",
      },
    },
  },
  validations: {
    email: "電子郵件",
    url: "連結",
    uuid: "uuid",
    cuid: "cuid",
    regex: "正則表達式",
    datetime: "datetime",
  },
  types: {
    function: "函數",
    number: "數字",
    string: "字串",
    nan: "NaN",
    integer: "整數",
    float: "浮點數",
    boolean: "布林值",
    date: "日期",
    bigint: "Bigint",
    undefined: "未定義",
    symbol: "Symbol",
    null: "null",
    array: "陣列",
    object: "物件",
    unknown: "unknown",
    promise: "Promise",
    void: "void",
    never: "never",
    map: "Map",
    set: "Set",
  },
};

// lng and resources key depend on your locale.
i18next
  .init({
    lng: "zh-TW",
    resources: {
      "zh-TW": { zod: translation },
    },
  })
  .catch((err) => {
    console.error("i18next 初始化失敗");
    console.error(err);
  });
z.setErrorMap(zodI18nMap);

// export configured zod instance
export { z };
