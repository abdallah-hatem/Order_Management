import React from "react"
import {
  TreeList,
  Editing,
  Column,
  Lookup,
  ValidationRule,
} from "devextreme-react/tree-list"
import { useTranslation } from "react-i18next"

function TreeTable({
  data,
  columns = [],
  autoExpandAll = false,
  columnAutoWidth = true,
  showBorders = true,
  keyExpr,
  parentIdExpr,
  rowAlternationEnabled = false,
  allowUpdating = false,
  allowDeleting = false,
  allowAdding = false,
  popUpTitle = "title",
  popUpWidth,
}) {
  const { t } = useTranslation()

  return (
    <TreeList
      // id="tasks"
      dataSource={data}
      autoExpandAll={autoExpandAll}
      columnAutoWidth={columnAutoWidth}
      showBorders={showBorders}
      keyExpr={keyExpr}
      parentIdExpr={parentIdExpr}
      rowAlternationEnabled={rowAlternationEnabled}
      hoverStateEnabled
    >
      <Editing
        mode="popup"
        allowUpdating={allowUpdating}
        allowDeleting={allowDeleting}
        allowAdding={allowAdding}
        popup={{ title: popUpTitle, showTitle: true, width: popUpWidth }}
        useIcons
      />
      {columns.map((el) => (
        <Column
          visible={el.visible}
          dataField={el.field}
          caption={t(el.caption)}
          format={el.format}
        >
          {el.validation && <ValidationRule type="required" />}
          {el.lookup && (
            <Lookup
              dataSource={{ store: data, sort: el.sortBy }}
              valueExpr={el.id}
              displayExpr={el.sortBy}
            />
          )}
        </Column>
      ))}
    </TreeList>
  )
}

export default TreeTable
