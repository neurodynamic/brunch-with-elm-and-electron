port module FileIO.Subscriptions exposing (..)

import FileIO.Messages exposing (..)


fileUtilsSubscriptions =
    Sub.batch
        [ triggerSave (always SaveToFile)
        , saveSuccess SaveSuccess
        , saveFailure SaveFailure
        , openSuccess OpenSuccess
        , openFailure OpenFailure
        ]


port triggerSave : (String -> msg) -> Sub msg


port saveSuccess : (FileData -> msg) -> Sub msg


port saveFailure : (ErrorMessage -> msg) -> Sub msg


port openSuccess : (FileData -> msg) -> Sub msg


port openFailure : (ErrorMessage -> msg) -> Sub msg
