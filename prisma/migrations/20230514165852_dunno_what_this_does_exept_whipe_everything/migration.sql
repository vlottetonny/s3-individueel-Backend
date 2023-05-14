BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[grocery_item] (
    [id] INT NOT NULL IDENTITY(1,1),
    [main_text] VARCHAR(256),
    [sub_text] VARCHAR(256),
    [in_basket] BIT CONSTRAINT [DF__grocery_i__in_ba__619B8048] DEFAULT 0,
    [added_by_id] INT,
    [grocery_list_id] INT,
    CONSTRAINT [PK__grocery___3213E83F4604C6B2] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[grocery_list] (
    [id] INT NOT NULL IDENTITY(1,1),
    [is_bought] BIT CONSTRAINT [DF__grocery_l__is_bo__6477ECF3] DEFAULT 0,
    [household_id] INT,
    [bought_date] DATETIME,
    CONSTRAINT [PK__grocery___3213E83F918E6DE2] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[household] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(20),
    [household_creator_id] INT,
    CONSTRAINT [PK__househol__3213E83FA6F3CB5E] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[user_account] (
    [id] INT NOT NULL IDENTITY(1,1),
    [username] VARCHAR(20),
    [first_name] VARCHAR(20),
    [last_name] VARCHAR(20),
    [password] VARCHAR(50),
    [household_id] INT,
    CONSTRAINT [PK__user_acc__3213E83F348E6092] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[grocery_item] ADD CONSTRAINT [grocery_item_grocery_list_id_fkey] FOREIGN KEY ([grocery_list_id]) REFERENCES [dbo].[grocery_list]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[user_account] ADD CONSTRAINT [user_account_household_id_fkey] FOREIGN KEY ([household_id]) REFERENCES [dbo].[household]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
